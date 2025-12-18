import React from "react";
import { hslToRgb } from "@/utils/color";
import type { AspectRatioId } from "@/components/DropdownControls/platformAspectConfig";
import { getCanvasDimensions } from "./canvasUtils";

type ResultCanvasProps = {
  previewUrl: string | null;
  aspectRatio: AspectRatioId;
  hue: number;
  saturation: number;
  lightness: number;
  opacity: number;
};

export const ResultCanvas: React.FC<ResultCanvasProps> = ({
  previewUrl,
  aspectRatio,
  hue,
  saturation,
  lightness,
  opacity,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const { width, height } = getCanvasDimensions(aspectRatio);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear previous drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fill with global color as background
    const rgb = hslToRgb(hue, saturation, lightness);
    ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!previewUrl) {
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Fit image into canvas while preserving aspect ratio
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      if (imgRatio > canvasRatio) {
        drawHeight = canvasWidth / imgRatio;
      } else {
        drawWidth = canvasHeight * imgRatio;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      // Draw image on top of color background
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };
    img.src = previewUrl;
  }, [previewUrl, width, height, aspectRatio, hue, saturation, lightness, opacity]);

  return (
    <div className="relative flex h-[85%] w-[85%] items-center justify-center overflow-hidden rounded-lg bg-[#F3F4F6]">
      {/* Inner dynamic layer: canvas sized by aspect ratio, constrained by outer */}
      <div className="flex h-full w-full items-center justify-center">
        <canvas
          ref={canvasRef}
          id="result-preview-canvas"
          className="max-h-full max-w-full bg-white shadow-sm"
        />
      </div>
      {!previewUrl && (
        <span className="pointer-events-none absolute text-xs text-[#929AAB] text-wrap w-42 text-center">
          Image Preview
        </span>
      )}
    </div>
  );
};

export default ResultCanvas;


