import React, { useRef } from "react";
import { prepareImageUpload } from "../services/uploadService";
import BasePanel from "./BasePanel";

type PlusCardProps = {
  onImageSelected?: (previewUrl: string) => void;
};

export const PlusCard: React.FC<PlusCardProps> = ({ onImageSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const { previewUrl } = await prepareImageUpload(file);
      onImageSelected?.(previewUrl);
    } catch (error) {
      console.error(error);
    } finally {
      // Allow selecting the same file again if needed.
      event.target.value = "";
    }
  };

  return (
    <BasePanel>
      <div className="flex h-full items-center justify-center">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Choose an image to upload"
        />
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#929AAB] bg-white text-[#393E46] transition hover:border-[#393E46] hover:bg-[#EEEEEE]"
          aria-label="Upload image"
          onClick={handleButtonClick}
        >
          <span className="text-3xl leading-none">+</span>
        </button>
      </div>
    </BasePanel>
  );
};

export default PlusCard;

