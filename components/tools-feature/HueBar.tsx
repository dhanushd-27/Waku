import React from "react";

interface HueBarProps {
  hue: number;
  onChange: (ratio: number) => void;
}

export const HueBar: React.FC<HueBarProps> = ({ hue, onChange }) => {
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

  return (
    <div>
      <div
        ref={trackRef}
        className="relative h-3 w-full cursor-pointer rounded-full border border-[#e5e7eb] bg-transparent shadow-sm"
        style={{
          backgroundImage:
            "linear-gradient(to right, red, #ff0, #0f0, #0ff, #00f, #f0f, red)",
        }}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute top-1/2 h-4 w-4 rounded-full border-2 border-white shadow-sm"
          style={{
            left: `${(hue / 360) * 100}%`,
            transform: "translate(-50%, -50%)",
            backgroundColor: `hsl(${hue}, 100%, 50%)`,
          }}
        />
      </div>
    </div>
  );
};

