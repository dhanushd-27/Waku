import React, { ChangeEvent } from "react";

interface FileInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ inputRef, onChange }) => {
  return (
    <input
      ref={inputRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={onChange}
      aria-label="Choose an image to upload"
    />
  );
};

