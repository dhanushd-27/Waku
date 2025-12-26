import React, { useRef } from "react";
import { prepareImageUpload } from "../../services/upload-service";
import { UploadButton } from "./UploadButton";
import { UploadInstructions } from "./UploadInstructions";
import { ImagePreview } from "./ImagePreview";
import { FileInput } from "./FileInput";
import { UploadArea } from "./UploadArea";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { clearImage, setImagePreview, setSuggestedColors } from "@/state/imageSlice";
import { extractColorsFromImage } from "@/utils/color";
import { CreatorBadge } from "@/components/creator-badge";

/**
 * UploadFeature
 * ----------------
 * Manages the image upload workflow including drag-and-drop handling,
 * file processing, preview display, and color extraction from uploaded images.
 * Coordinates upload area, file input, and image preview components.
 * 
 * Side effects:
 * - Dispatches Redux actions for image preview and suggested colors
 * - Extracts dominant colors from uploaded images via canvas analysis
 */
export const UploadFeature: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearImage = () => {
    dispatch(clearImage());
  };

  const processFile = async (file: File) => {
    try {
      const { previewUrl: url } = await prepareImageUpload(file);
      dispatch(setImagePreview(url));
      
      try {
        const colors = await extractColorsFromImage(url, 8);
        dispatch(setSuggestedColors(colors));
      } catch (colorError) {
        console.error("Failed to extract colors:", colorError);
        dispatch(setSuggestedColors([]));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    await processFile(file);
    event.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  return (
    <div className="h-full rounded-xl border border-accent-200/30 bg-white p-4 shadow-sm">
      <div className="flex h-full flex-col gap-3">
        <div className="flex-1">
          <UploadArea
            isDragging={isDragging}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <FileInput inputRef={fileInputRef} onChange={handleFileChange} />
            {!previewUrl ? (
              <div className="mt-4 flex w-full justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-lg border border-accent-200/30 bg-accent-200" />
              </div>
            ) : (
              <ImagePreview
                previewUrl={previewUrl}
                isPlaceholder={false}
                onClear={handleClearImage}
              />
            )}
            <UploadInstructions />
            <UploadButton onClick={handleButtonClick} />
          </UploadArea>
        </div>

        <div className="pt-1">
          <CreatorBadge />
        </div>
      </div>
    </div>
  );
};


