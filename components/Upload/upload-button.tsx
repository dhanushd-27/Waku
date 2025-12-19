import React from "react";
import Image from "next/image";

type UploadButtonProps = {
  onClick: () => void;
};

export const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition shadow-md"
      onClick={onClick}
      aria-label="Upload image"
    >
      <Image
        src="/upload.svg"
        width={16}
        height={16}
        alt="Upload icon"
      />
      <span className="text-xs text-black">Upload</span>
    </button>
  );
};

