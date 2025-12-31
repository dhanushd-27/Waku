import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import type { AspectRatioId } from "@/components/dropdown-controls/platform-aspect-config";
import { ResultCanvas } from "./ResultCanvas";

export const ResultImagePreview: React.FC = () => {
  const previewUrl = useAppSelector((state) => state.image.previewUrl);
  const aspectRatio = useAppSelector(
    (state) => state.aspectRatio.aspectRatio,
  ) as AspectRatioId;
  const { hue, saturation, lightness, opacity } = useAppSelector(
    (state) => state.color,
  );

  return (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border border-dashed bg-[color:var(--color-panel-bg)] text-muted border-[color:var(--color-border-muted)]">
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

