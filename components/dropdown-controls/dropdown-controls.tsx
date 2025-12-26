import React from "react";
import BasePanel from "../base-panel";
import PlatformDropdown from "./platform-dropdown";
import AspectRatioDropdown from "./aspect-ratio-dropdown";
import ImageTypeDropdown from "./image-type-dropdown";
import ResultImagePreview from "../result-image-preview";
import ResultImageNote from "../result-image-preview/result-image-note";
import Dropdown from "./dropdown";
import { useAppSelector } from "@/hooks/useAppSelector";

/**
 * DropdownControls
 * ----------------
 * Manages platform selection, aspect ratio, image type, and download
 * quality controls. Handles canvas-based image download with quality
 * settings and coordinates preview display.
 * 
 * Side effects:
 * - Triggers canvas-to-blob conversion for image download
 * - Creates temporary download links for file saving
 */
export const DropdownControls: React.FC = () => {
  const [downloadQuality, setDownloadQuality] = React.useState("0.92");
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const isImageUploaded = previewUrl !== null;

  const handleDownload = () => {
    if (typeof document === "undefined") return;

    const canvas = document.getElementById(
      "result-preview-canvas",
    ) as HTMLCanvasElement | null;

    if (!canvas) {
      return;
    }

    const quality = Number.isFinite(parseFloat(downloadQuality))
      ? parseFloat(downloadQuality)
      : 0.92;
    const mimeType = "image/jpeg";

    const triggerDownload = (url: string) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = "waku-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    if (canvas.toBlob) {
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const objectUrl = URL.createObjectURL(blob);
          triggerDownload(objectUrl);
          URL.revokeObjectURL(objectUrl);
        },
        mimeType,
        quality,
      );
    } else {
      const dataUrl = canvas.toDataURL(mimeType, quality);
      triggerDownload(dataUrl);
    }
  };

  return (
    <>
      <BasePanel title="Controls">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <PlatformDropdown />
          <AspectRatioDropdown />
          <ImageTypeDropdown />
        </div>
        <div className="mt-4 space-y-2">
          <ResultImageNote />
          <ResultImagePreview />
          <div className="flex flex-col gap-2 pt-2 md:flex-row md:items-end md:justify-between">
            <div className="w-full md:w-1/2">
              <Dropdown
                label="Download quality"
                helperText="Higher quality means larger file size"
                value={downloadQuality}
                onChange={(value) => setDownloadQuality(value)}
                options={[
                  { value: "1", label: "High (100%)" },
                  { value: "0.92", label: "Recommended (92%)" },
                  { value: "0.8", label: "Medium (80%)" },
                  { value: "0.6", label: "Light (60%)" },
                ]}
                placeholder="Select quality"
              />
            </div>
            <button
              type="button"
              onClick={handleDownload}
              disabled={!isImageUploaded}
              className="relative bg-background-dark text-white px-4 py-2 rounded-full text-xs flex text-center items-center justify-center overflow-clip group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
            >
              <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-white rounded-full w-[70%] h-full blur-lg group-hover:-bottom-7 transition-all duration-300 pointer-events-none disabled:group-hover:-bottom-10"
              ></span>
              Download image
            </button>
          </div>
        </div>
      </BasePanel>
    </>
  );
};

export default DropdownControls;

