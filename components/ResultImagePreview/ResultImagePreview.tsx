import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

const BASE_CANVAS_WIDTH = 512;

const getCanvasDimensions = (aspectRatio: string) => {
  switch (aspectRatio) {
    case "4:5":
      return { width: BASE_CANVAS_WIDTH, height: Math.round((BASE_CANVAS_WIDTH * 5) / 4) };
    case "16:9":
      return { width: BASE_CANVAS_WIDTH, height: Math.round((BASE_CANVAS_WIDTH * 9) / 16) };
    case "9:16":
      return { width: BASE_CANVAS_WIDTH, height: Math.round((BASE_CANVAS_WIDTH * 16) / 9) };
    case "1:1":
    default:
      return { width: BASE_CANVAS_WIDTH, height: BASE_CANVAS_WIDTH };
  }
};

export const ResultImagePreview: React.FC = () => {
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const aspectRatio = useAppSelector((state) => state.aspectRatio.aspectRatio);
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

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };
    img.src = previewUrl;
  }, [previewUrl, width, height, aspectRatio]);

  return (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-dashed border-[#929AAB]/50 bg-white text-[#929AAB]">
      {/* Outer static background layer */}
      <div className="relative flex h-[85%] w-[85%] items-center justify-center overflow-hidden rounded-lg bg-[#F3F4F6]">
        {/* Inner dynamic layer: canvas sized by aspect ratio, constrained by outer */}
        <div className="flex h-full w-full items-center justify-center">
          <canvas
            ref={canvasRef}
            className="max-h-full max-w-full rounded-md bg-white shadow-sm"
          />
        </div>
        {!previewUrl && (
          <span className="pointer-events-none absolute text-xs text-[#929AAB]">
            Processed image preview will appear here
          </span>
        )}
      </div>
    </div>
  );
};

export default ResultImagePreview;

