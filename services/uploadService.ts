// Utility functions for client-side image uploads and previews.

export type ImageUploadResult = {
  file: File;
  previewUrl: string;
};

const readFileAsDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });

/**
 * Validate and prepare an image file for preview.
 * Throws if the selected file is not an image.
 */
export async function prepareImageUpload(
  file: File,
): Promise<ImageUploadResult> {
  if (!file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed.");
  }

  const previewUrl = await readFileAsDataUrl(file);
  return { file, previewUrl };
}
