import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import type {
  Platform,
  AspectRatioId,
} from "@/components/DropdownControls/platformAspectConfig";
import { getAspectRatioNote } from "@/components/DropdownControls/platformAspectConfig";

const PLATFORM_LABELS: Record<Platform, string> = {
  instagram: "Instagram",
  x: "X",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
};

export const ResultImageNote: React.FC = () => {
  const platform = useAppSelector(
    (state) => state.platform.platform,
  ) as Platform;
  const aspectRatio = useAppSelector(
    (state) => state.aspectRatio.aspectRatio,
  ) as AspectRatioId;

  const note = getAspectRatioNote(platform, aspectRatio);

  if (!note) {
    return null;
  }

  const platformLabel = PLATFORM_LABELS[platform] ?? platform;

  return (
    <p className="mb-2 text-xs text-slate-500">
      <span className="font-medium">
        {platformLabel} {aspectRatio}
      </span>
      <span className="mx-1">•</span>
      <span>{note}</span>
    </p>
  );
};

export default ResultImageNote;


