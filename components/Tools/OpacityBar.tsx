import React from "react";
import type { RGB } from "../../utils/color";

interface OpacityBarProps {
  opacity: number;
  baseRgb: RGB;
  onChange: (ratio: number) => void;
}

export const OpacityBar: React.FC<OpacityBarProps> = ({ opacity, baseRgb, onChange }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    onChange(ratio);
  };

  const gradient = {
    backgroundImage: `linear-gradient(to right, rgba(${baseRgb.r}, ${baseRgb.g}, ${
      baseRgb.b
    }, 0), rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, 1))`,
  };

  return (
    <div>
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
        Opacity
      </div>
      <div
        className="relative h-3 w-full cursor-pointer rounded-full bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%,#e5e7eb_100%),linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%,#e5e7eb_100%)] bg-[length:10px_10px] bg-[position:0_0,5px_5px] shadow-sm"
        onClick={handleClick}
      >
        <div className="absolute inset-0 rounded-full" style={gradient} />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white shadow-sm"
          style={{
            left: `${opacity * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default OpacityBar;


