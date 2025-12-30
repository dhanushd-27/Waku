import React from "react";
import Image from "next/image";

type UploadButtonProps = {
  onClick: () => void;
};

export const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="button-outlined shadow-md"
      onClick={onClick}
      aria-label="Upload image"
    >
      <Image
        src="/upload.svg"
        width={16}
        height={16}
        alt="Upload icon"
      />
      <span className="text-xs">Upload</span>
    </button>
  );
};

