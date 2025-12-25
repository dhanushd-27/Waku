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
      className={`flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed border-accent-200/40 bg-accent-900 p-6 text-accent-200 ${
        isDragging ? "border-accent-200 bg-accent-800" : ""
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};

