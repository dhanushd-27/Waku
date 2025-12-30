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
      className={`flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-6 bg-surface text-primary border-[color:rgba(167,167,167,0.4)] ${
        isDragging
          ? "border-[color:var(--color-brand-orange)] bg-[color:rgba(232,80,2,0.1)]"
          : ""
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};

