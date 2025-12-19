import type { AspectRatioId } from "@/components/dropdown-controls/platform-aspect-config";

// Higher base width so downloaded images have more detail.
// The canvas is scaled down visually by CSS, but exports keep this resolution.
export const BASE_CANVAS_WIDTH = 2048;

export const getCanvasDimensions = (aspectRatio: AspectRatioId) => {
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


