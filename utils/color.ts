export type RGB = { r: number; g: number; b: number };

export const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export const hslToRgb = (h: number, s: number, l: number): RGB => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hh = h / 60;
  const x = c * (1 - Math.abs((hh % 2) - 1));
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;

  if (hh >= 0 && hh < 1) {
    r1 = c;
    g1 = x;
  } else if (hh >= 1 && hh < 2) {
    r1 = x;
    g1 = c;
  } else if (hh >= 2 && hh < 3) {
    g1 = c;
    b1 = x;
  } else if (hh >= 3 && hh < 4) {
    g1 = x;
    b1 = c;
  } else if (hh >= 4 && hh < 5) {
    r1 = x;
    b1 = c;
  } else if (hh >= 5 && hh <= 6) {
    r1 = c;
    b1 = x;
  }

  const m = l - c / 2;
  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };
};

export const rgbToHex = ({ r, g, b }: RGB) =>
  `#${[r, g, b]
    .map((c) => clamp(c, 0, 255).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

export const hexToRgb = (hex: string): RGB | null => {
  const value = hex.replace("#", "").trim();
  if (!/^[0-9A-Fa-f]{6}$/.test(value)) return null;
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return { r, g, b };
};

export const rgbToHsl = ({ r, g, b }: RGB): { h: number; s: number; l: number } => {
  const rNorm = clamp(r / 255, 0, 1);
  const gNorm = clamp(g / 255, 0, 1);
  const bNorm = clamp(b / 255, 0, 1);

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const delta = max - min;

  let h = 0;
  const l = (max + min) / 2;
  let s = 0;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case rNorm:
        h = 60 * (((gNorm - bNorm) / delta) % 6);
        break;
      case gNorm:
        h = 60 * ((bNorm - rNorm) / delta + 2);
        break;
      case bNorm:
        h = 60 * ((rNorm - gNorm) / delta + 4);
        break;
    }
  }

  if (h < 0) h += 360;

  return { h, s, l };
};

/**
 * extractColorsFromImage
 * ----------------
 * Analyzes image pixel data to extract dominant colors by quantizing
 * color values and counting frequencies. Returns up to maxColors colors
 * ordered by frequency.
 * 
 * Side effects:
 * - Creates temporary canvas element for image analysis
 * - Loads image via Image API with CORS handling
 * - Scales down image to 200px max dimension for performance
 */
export async function extractColorsFromImage(
  imageUrl: string,
  maxColors: number = 8,
): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }

        const maxDimension = 200;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDimension) {
            height = (height * maxDimension) / width;
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = (width * maxDimension) / height;
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        const colorMap = new Map<string, number>();
        const quantize = (value: number) => Math.round(value / 10) * 10;

        for (let i = 0; i < data.length; i += 4) {
          const r = quantize(data[i]);
          const g = quantize(data[i + 1]);
          const b = quantize(data[i + 2]);
          const a = data[i + 3];

          if (a < 128) continue;

          const hex = rgbToHex({ r, g, b });
          colorMap.set(hex, (colorMap.get(hex) || 0) + 1);
        }

        const sortedColors = Array.from(colorMap.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, maxColors)
          .map(([color]) => color);

        resolve(sortedColors);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };

    img.src = imageUrl;
  });
}

