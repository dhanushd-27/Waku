import React from "react";
import BasePanel from "../base-panel";
import PlatformDropdown from "./platform-dropdown";
import AspectRatioDropdown from "./aspect-ratio-dropdown";
import ImageTypeDropdown from "./image-type-dropdown";
import ResultImagePreview from "../result-image-preview";
import ResultImageNote from "../result-image-preview/result-image-note";
import Dropdown from "./dropdown";

export const DropdownControls: React.FC = () => {
  const [downloadQuality, setDownloadQuality] = React.useState("0.92");

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
              className="inline-flex items-center justify-center rounded-lg bg-[#393E46] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#222831] focus:outline-none focus:ring-2 focus:ring-[#929AAB]/40 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-[#9CA3AF]"
            >
              Download image
            </button>
          </div>
        </div>
      </BasePanel>
    </>
  );
};

export default DropdownControls;

