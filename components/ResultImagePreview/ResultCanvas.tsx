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

// Shared helper to render the canvas in a single pass.
// Draw order: clear → background → image (if present).
function paintCanvas(
  canvas: HTMLCanvasElement | null,
  image: HTMLImageElement | null,
  width: number,
  height: number,
  hue: number,
  saturation: number,
  lightness: number,
  opacity: number,
) {
  if (!canvas) return;

  // Only touch canvas dimensions when they actually change.
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const rgb = hslToRgb(hue, saturation, lightness);

  // Single-pass redraw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!image) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const imgRatio = image.width / image.height;
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

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

export const ResultCanvas: React.FC<ResultCanvasProps> = ({
  previewUrl,
  aspectRatio,
  hue,
  saturation,
  lightness,
  opacity,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const { width, height } = getCanvasDimensions(aspectRatio);

  // 1) Load / update the image only when the URL changes.
  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (!previewUrl) {
      imageRef.current = null;
      paintCanvas(canvas, null, width, height, hue, saturation, lightness, opacity);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imageRef.current = img;
      // Draw with whatever the latest color props were when this effect ran.
      paintCanvas(canvasRef.current, imageRef.current, width, height, hue, saturation, lightness, opacity);
    };
    img.src = previewUrl;

    return () => {
      // Best-effort cleanup: if this effect is re-run for a new URL, drop reference to this image.
      if (imageRef.current === img) {
        imageRef.current = null;
      }
    };
    // We intentionally only depend on previewUrl here so the image is not reloaded on color changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewUrl]);

  // 2) Redraw canvas when visual parameters change (color / size),
  //    using the already cached image (if loaded).
  React.useEffect(() => {
    const canvas = canvasRef.current;
    paintCanvas(
      canvas,
      imageRef.current,
      width,
      height,
      hue,
      saturation,
      lightness,
      opacity,
    );
  }, [hue, saturation, lightness, opacity, width, height]);

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


