import React from "react";

interface HueBarProps {
  hue: number;
  onChange: (ratio: number) => void;
}

export const HueBar: React.FC<HueBarProps> = ({ hue, onChange }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    onChange(ratio);
  };

  return (
    <div>
      <div
        className="relative h-4 w-full cursor-pointer rounded-full shadow-sm"
        style={{
          backgroundImage:
            "linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red)",
        }}
        onClick={handleClick}
      >
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white shadow-sm"
          style={{
            left: `${(hue / 360) * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default HueBar;


