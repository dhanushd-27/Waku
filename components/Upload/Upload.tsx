import React, { useRef, useState } from "react";
import { prepareImageUpload } from "../../services/uploadService";
import { UploadButton } from "./UploadButton";
import { UploadInstructions } from "./UploadInstructions";
import { ImagePreview } from "./ImagePreview";
import { FileInput } from "./FileInput";
import { UploadArea } from "./UploadArea";

type UploadProps = {
  onImageSelected?: (previewUrl: string | null) => void;
};

export const Upload: React.FC<UploadProps> = ({ onImageSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearImage = () => {
    setPreviewUrl(null);
    onImageSelected?.(null);
  };

  const processFile = async (file: File) => {
    try {
      const { previewUrl: url } = await prepareImageUpload(file);
      setPreviewUrl(url);
      onImageSelected?.(url);
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
    // Allow selecting the same file again if needed.
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
    <div className="h-full rounded-xl border border-[#929AAB]/30 bg-white p-4 shadow-sm">
      <div className="space-y-3">
        <UploadArea
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FileInput inputRef={fileInputRef} onChange={handleFileChange} />
          <UploadButton onClick={handleButtonClick} />
          <UploadInstructions />
          {previewUrl && (
            <ImagePreview previewUrl={previewUrl} onClear={handleClearImage} />
          )}
        </UploadArea>
      </div>
    </div>
  );
};

export default Upload;
