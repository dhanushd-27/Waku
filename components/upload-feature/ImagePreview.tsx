import Image from "next/image";
import React from "react";

interface ImagePreviewProps {
  previewUrl: string;
  isPlaceholder?: boolean;
  onClear?: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  previewUrl,
  isPlaceholder = false,
  onClear,
}) => {
  return (
    <div className="mt-4 w-full flex justify-center">
      <div className="group relative flex h-42 w-42 items-center justify-center overflow rounded-lg border bg-[color:var(--color-panel-bg)] border-[color:var(--color-border-muted)]">
        {onClear && !isPlaceholder && (
          <button
            type="button"
            onClick={onClear}
            className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--color-panel-bg)] opacity-0 shadow-md transition-opacity group-hover:opacity-100 duration-300 hover:bg-[color:var(--color-brand-orange)] hover:text-[color:var(--color-primary-white)]"
            aria-label="Remove uploaded image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-2 w-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        <Image
          src={previewUrl}
          alt={isPlaceholder ? "Placeholder image" : "Uploaded preview"}
          fill
          className="rounded-lg object-contain"
          sizes="144px"
        />
      </div>
    </div>
  );
};

