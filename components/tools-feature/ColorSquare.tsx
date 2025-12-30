import React from "react";

interface ColorSquareProps {
  hue: number;
  saturation: number; // 0–1
  lightness: number; // 0–1
  onChange: (saturation: number, lightness: number) => void;
}

export const ColorSquare: React.FC<ColorSquareProps> = ({
  hue,
  saturation,
  lightness,
  onChange,
}) => {
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  const updateFromClientPosition = (clientX: number, clientY: number) => {
    const track = trackRef.current;
    if (!track) return;

    // Allow interaction even slightly outside the square (24px margin)
    const OUTSIDE_MARGIN = 24;

    const rect = track.getBoundingClientRect();

    // Ignore movements that are *far* outside the square (beyond the margin)
    if (
      clientX < rect.left - OUTSIDE_MARGIN ||
      clientX > rect.right + OUTSIDE_MARGIN ||
      clientY < rect.top - OUTSIDE_MARGIN ||
      clientY > rect.bottom + OUTSIDE_MARGIN
    ) {
      return;
    }

    // Clamp to the square so values stay on the edges when slightly outside
    const x = Math.min(rect.width, Math.max(0, clientX - rect.left));
    const y = Math.min(rect.height, Math.max(0, clientY - rect.top));

    const ratioX = Math.min(1, Math.max(0, x / rect.width));
    const ratioY = Math.min(1, Math.max(0, y / rect.height));

    // Interpret square as HSV: x = saturation (S_v), y = value (V)
    const satV = ratioX; // 0–1
    const value = 1 - ratioY; // 0 (bottom) → 1 (top)

    // Convert HSV (H, S_v, V) → HSL (H, S_l, L) to keep Redux state in HSL
    // L = V * (1 - S_v / 2)
    const nextLightness = value * (1 - satV / 2);
    // S_l = 0 when L is 0 or 1, otherwise (V - L) / min(L, 1 - L)
    let nextSaturation = 0;
    if (nextLightness > 0 && nextLightness < 1) {
      nextSaturation =
        (value - nextLightness) / Math.min(nextLightness, 1 - nextLightness);
    }

    onChange(nextSaturation, nextLightness);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    updateFromClientPosition(event.clientX, event.clientY);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    updateFromClientPosition(event.clientX, event.clientY);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      updateFromClientPosition(moveEvent.clientX, moveEvent.clientY);
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

    updateFromClientPosition(touch.clientX, touch.clientY);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const moveTouch = moveEvent.touches[0];
      if (!moveTouch) return;
      updateFromClientPosition(moveTouch.clientX, moveTouch.clientY);
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

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(to top, rgba(0,0,0,1), transparent),
      linear-gradient(to right, var(--color-primary-white), hsl(${hue}deg, 100%, 50%))
    `,
  };

  // Derive back HSV coords from HSL so pointer matches what the square visually shows.
  // HSL (H, S_l, L) → HSV (H, S_v, V)
  const l = Math.min(1, Math.max(0, lightness));
  const sL = Math.min(1, Math.max(0, saturation));
  const value = l + sL * Math.min(l, 1 - l); // V
  const satV =
    value === 0 ? 0 : value === 1 ? 0 : 2 * (1 - l / value); // S_v

  const pointerStyle: React.CSSProperties = {
    left: `${satV * 100}%`,
    top: `${(1 - value) * 100}%`,
    transform: "translate(-50%, -50%)",
    backgroundColor: `hsl(${hue}deg, ${saturation * 100}%, ${lightness * 100}%)`,
  };

  return (
    <div
      ref={trackRef}
      className="relative w-full rounded-xl border shadow-sm overflow-hidden cursor-pointer border-[color:rgba(167,167,167,0.5)]"
      style={{ aspectRatio: "1 / 1" }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="absolute inset-0" style={backgroundStyle} />
      <div
        className="absolute h-3 w-3 rounded-full border shadow-sm border-[color:var(--color-primary-white)]"
        style={pointerStyle}
      />
    </div>
  );
};

