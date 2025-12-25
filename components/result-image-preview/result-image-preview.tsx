import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { AspectRatioId } from "@/components/dropdown-controls/platform-aspect-config";
import ResultCanvas from "./result-canvas";

export const ResultImagePreview: React.FC = () => {
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const aspectRatio = useAppSelector(
    (state) => state.aspectRatio.aspectRatio,
  ) as AspectRatioId;
  const { hue, saturation, lightness, opacity } = useAppSelector(
    (state) => state.color,
  );

  return (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-dashed border-accent-200/50 bg-white text-accent-200">
      <ResultCanvas
        previewUrl={previewUrl}
        aspectRatio={aspectRatio}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        opacity={opacity}
      />
    </div>
  );
};

export default ResultImagePreview;


