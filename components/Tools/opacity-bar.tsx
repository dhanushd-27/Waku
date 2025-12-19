import React from "react";
import type { RGB } from "../../utils/color";

interface OpacityBarProps {
  opacity: number;
  baseRgb: RGB;
  onChange: (ratio: number) => void;
}

export const OpacityBar: React.FC<OpacityBarProps> = ({ opacity, baseRgb, onChange }) => {
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const updateFromClientX = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const x = clientX - rect.left;
    const ratio = Math.min(1, Math.max(0, x / rect.width));
    onChange(ratio);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    updateFromClientX(event.clientX);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateFromClientX(event.clientX);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      updateFromClientX(moveEvent.clientX);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    updateFromClientX(touch.clientX);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const moveTouch = moveEvent.touches[0];
      if (!moveTouch) return;
      updateFromClientX(moveTouch.clientX);
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);
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
        ref={trackRef}
        className="relative h-3 w-full cursor-pointer rounded-full border border-gray-300 shadow-sm"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0 rounded-full" style={gradient} />
        <div
          className="absolute top-1/2 h-4 w-4 rounded-full border-2 border-white shadow-sm"
          style={{
            left: `${opacity * 100}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${opacity})`,
          }}
        />
      </div>
    </div>
  );
};

export default OpacityBar;


