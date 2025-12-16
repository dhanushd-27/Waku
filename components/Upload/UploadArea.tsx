import React, { ReactNode } from "react";

type UploadAreaProps = {
  isDragging: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  children: ReactNode;
};

export const UploadArea: React.FC<UploadAreaProps> = ({
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  children,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed border-[#929AAB]/50 bg-[#f8f8f8]  p-6 text-[#929AAB] ${isDragging ? "border-[#929AAB] bg-gray-50" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};

