import React from "react";

interface ColorSquareProps {
  hue: number;
}

export const ColorSquare: React.FC<ColorSquareProps> = ({ hue }) => {
  const style = {
    backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,1), transparent),
      linear-gradient(to right, #ffffff, hsl(${hue}deg, 100%, 50%))
    `,
  };

  return (
    <div
      className="relative w-full rounded-xl border border-gray-300 shadow-sm overflow-hidden"
      style={{ aspectRatio: "1 / 1" }}
    >
      <div className="absolute inset-0" style={style} />
    </div>
  );
};

export default ColorSquare;


