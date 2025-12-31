import React from "react";

type HexInputProps = {
  hex: string;
  onChange: (value: string) => void;
  previewColor: string;
  previewOpacity: number;
};

export const HexInput: React.FC<HexInputProps> = ({
  hex,
  onChange,
  previewColor,
  previewOpacity,
}) => {
  const handleChange = (value: string) => {
    const sanitized = value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6);
    const withHash = sanitized ? `#${sanitized}` : "#";
    onChange(withHash);
  };

  const displayValue = hex.startsWith("#") ? hex.slice(1) : hex;

  return (
    <div className="flex flex-1 flex-col gap-1">
      <label htmlFor="hexColor" className="text-sm font-medium text-primary">
        Hex color
      </label>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-primary">#</p>
        <input
          id="hexColor"
          type="text"
          maxLength={6}
          value={displayValue}
          onChange={(event) => handleChange(event.target.value)}
          aria-label="Hex color value"
          className="h-10 w-full rounded-lg border bg-[color:var(--color-field-bg)] px-3 text-sm text-primary shadow-inner focus:outline-none border-[color:var(--color-border-muted)] focus:border-[color:var(--color-brand-orange)]"
        />
      </div>
    </div>
  );
};

