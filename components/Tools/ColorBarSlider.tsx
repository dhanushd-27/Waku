import React from "react";
import { gradientStops } from "./utils";

type ColorBarSliderProps = {
  hue: number;
  onChange: (value: number) => void;
};

export const ColorBarSlider: React.FC<ColorBarSliderProps> = ({ hue, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#393E46]">Color bar</label>
      <input
        type="range"
        min={0}
        max={360}
        value={hue}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label="Select background color"
        className="h-3 w-full cursor-pointer appearance-none rounded-full border border-[#929AAB]/40"
        style={{ background: gradientStops }}
      />
    </div>
  );
};

export default ColorBarSlider;
