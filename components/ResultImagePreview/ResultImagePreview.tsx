import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { AspectRatioId } from "@/components/DropdownControls/platformAspectConfig";
import { hslToRgb } from "@/utils/color";

const BASE_CANVAS_WIDTH = 512;

const getCanvasDimensions = (aspectRatio: AspectRatioId) => {
  const [rawW, rawH] = aspectRatio.split(":");
  const w = parseFloat(rawW);
  const h = parseFloat(rawH);

  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
    return { width: BASE_CANVAS_WIDTH, height: BASE_CANVAS_WIDTH };
  }

  // width is fixed; height derived from ratio
  const height = Math.round((BASE_CANVAS_WIDTH * h) / w);

  return { width: BASE_CANVAS_WIDTH, height };
};

export const ResultImagePreview: React.FC = () => {
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const aspectRatio = useAppSelector(
    (state) => state.aspectRatio.aspectRatio,
  ) as AspectRatioId;
  const { hue, saturation, lightness, opacity } = useAppSelector(
    (state) => state.color,
  );
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
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-dashed border-[#929AAB]/50 bg-white text-[#929AAB]">
      {/* Outer static background layer */}
      <div className="relative flex h-[85%] w-[85%] items-center justify-center overflow-hidden rounded-lg bg-[#F3F4F6]">
        {/* Inner dynamic layer: canvas sized by aspect ratio, constrained by outer */}
        <div className="flex h-full w-full items-center justify-center">
          <canvas
            ref={canvasRef}
            className="max-h-full max-w-full bg-white shadow-sm"
          />
        </div>
        {!previewUrl && (
          <span className="pointer-events-none absolute text-xs text-[#929AAB] text-wrap w-42 text-center">
            Image Preview
          </span>
        )}
      </div>
    </div>
  );
};

export default ResultImagePreview;

