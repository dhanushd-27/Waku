import React from "react";

interface AutoPickedColorsProps {
  colors: string[];
  onSelect: (hex: string) => void;
}

export const AutoPickedColors: React.FC<AutoPickedColorsProps> = ({
  colors,
  onSelect,
}) => {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Auto Picked Colors
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className="h-7 w-7 rounded-full border border-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            style={{ backgroundColor: color }}
            aria-label={`Use color ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoPickedColors;


