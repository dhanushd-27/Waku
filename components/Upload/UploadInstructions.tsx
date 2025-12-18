import React from "react";

export const UploadInstructions: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-1 text-center w-[80%]">
      <p className="text-black/80 text-sm font-normal">
        Choose images or drag & drop it here.
      </p>
      <p className="text-xs font-normal text-gray-500">
        JPG, JPEG, PNG and WEBP. Max 20 MB.
      </p>
    </div>
  );
};

