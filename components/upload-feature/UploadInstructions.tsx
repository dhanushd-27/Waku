import React from "react";

export const UploadInstructions: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-1 text-center w-[80%]">
      <p className="text-primary text-sm font-normal opacity-80">
        Choose images or drag & drop it here.
      </p>
      <p className="text-xs font-normal text-muted">
        JPG, JPEG, PNG and WEBP. Max 20 MB.
      </p>
    </div>
  );
};

