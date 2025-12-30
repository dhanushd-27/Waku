import React from "react";

type AutoPickedColorsProps = {
  colors: string[];
  onSelect: (hex: string) => void;
};

export const AutoPickedColors: React.FC<AutoPickedColorsProps> = ({
  colors,
  onSelect,
}) => {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium uppercase tracking-wide text-muted">
        Suggested Colors
      </div>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className="h-5 w-5 rounded-full border shadow-sm transition hover:-translate-y-0.5 hover:shadow shrink-0 border-[color:rgba(167,167,167,0.5)]"
            style={{ backgroundColor: color }}
            aria-label={`Use color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

