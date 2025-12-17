export type Platform = "instagram" | "x" | "whatsapp";

export type AspectRatioId = "1:1" | "4:5" | "16:9" | "9:16" | "1.91:1";

export type AspectRatioOption = {
  value: AspectRatioId;
  label: string;
  description?: string;
};

export const PLATFORM_ASPECT_OPTIONS: Record<Platform, AspectRatioOption[]> = {
  instagram: [
    { value: "1:1", label: "1:1 (Square feed)" },
    { value: "4:5", label: "4:5 (Portrait feed)" },
    { value: "9:16", label: "9:16 (Story / Reel)" },
    { value: "1.91:1", label: "1.91:1 (Landscape feed)" },
  ],
  x: [
    { value: "16:9", label: "16:9 (Recommended)" },
    { value: "1:1", label: "1:1 (Square)" },
    { value: "9:16", label: "9:16 (Tall)" },
  ],
  whatsapp: [
    { value: "9:16", label: "9:16 (Status)" },
    { value: "4:5", label: "4:5 (Portrait)" },
    { value: "1:1", label: "1:1 (Square)" },
    { value: "16:9", label: "16:9 (Landscape)" },
  ],
};


