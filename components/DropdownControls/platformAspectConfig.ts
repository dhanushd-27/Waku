export type Platform = "instagram" | "x" | "whatsapp" | "linkedin";

export type AspectRatioId =
  | "1:1"
  | "4:5"
  | "16:9"
  | "9:16"
  | "1.91:1"
  | "3:1"
  | "3:4"
  | "4:1"
  | "5.9:1"
  | "3:2";

export type AspectRatioOption = {
  value: AspectRatioId;
  label: string;
  description?: string;
};

const ASPECT_RATIO_NOTES: Record<
  Platform,
  Partial<Record<AspectRatioId, string>>
> = {
  x: {
    "1:1": "Profile image, square post images.",
    "16:9": "Landscape post images, some video formats.",
    "3:1": "Header/cover image, wide horizontal post images.",
    "1.91:1": "Link preview (card) images in posts.",
    "4:5": "Vertical post images that show fully in timeline.",
  },
  instagram: {
    "1:1": "Profile image source, square feed posts, carousel posts.",
    "4:5": "Primary vertical feed posts and carousels.",
    "1.91:1": "Horizontal feed posts.",
    "9:16":
      "Stories, Reels video frame and cover, full-screen vertical content.",
  },
  whatsapp: {
    "1:1": "Profile image source, square media shared in chats.",
    "9:16":
      "Status images and vertical photos/videos that fill the screen.",
    "4:5": "Tall photos sent in chats, commonly used vertical format.",
    "16:9": "Landscape photos and videos shared in chats.",
    "3:4": "Vertical photos and screenshots shared in chats.",
  },
  linkedin: {
    "1:1": "Profile photos, company logos, carousel ad images.",
    "4:1": "Personal profile cover/hero image.",
    "3:1": "Wide horizontal post images.",
    "4:5": "Vertical post images in the feed.",
    "1.91:1": "Link preview images for shared URLs.",
    "5.9:1": "Company page cover/banner image.",
    "3:2": "Company photos in the Life tab.",
  },
};

export const getAspectRatioNote = (
  platform: Platform,
  aspectRatio: AspectRatioId,
): string | undefined => {
  return ASPECT_RATIO_NOTES[platform]?.[aspectRatio];
};

export const PLATFORM_ASPECT_OPTIONS: Record<Platform, AspectRatioOption[]> = {
  instagram: [
    { value: "1:1", label: "1:1" },
    { value: "4:5", label: "4:5" },
    { value: "9:16", label: "9:16" },
    { value: "1.91:1", label: "1.91:1" },
  ],
  x: [
    { value: "1:1", label: "1:1" },
    { value: "4:5", label: "4:5" },
    { value: "16:9", label: "16:9" },
    { value: "1.91:1", label: "1.91:1" },
    { value: "3:1", label: "3:1" },
  ],
  whatsapp: [
    { value: "9:16", label: "9:16" },
    { value: "4:5", label: "4:5" },
    { value: "1:1", label: "1:1" },
    { value: "16:9", label: "16:9" },
    { value: "3:4", label: "3:4" },
  ],
  linkedin: [
    { value: "1:1", label: "1:1" },
    { value: "4:1", label: "4:1" },
    { value: "3:1", label: "3:1" },
    { value: "4:5", label: "4:5" },
    { value: "1.91:1", label: "1.91:1" },
    { value: "5.9:1", label: "5.9:1" },
    { value: "3:2", label: "3:2" },
  ],
};


