import React from "react";
import BasePanel from "../BasePanel";

type CurrentImagePreviewProps = {
  imageUrl?: string | null;
};

export const CurrentImagePreview: React.FC<CurrentImagePreviewProps> = ({
  imageUrl,
}) => {
  return (
    <BasePanel title="Before">
      {imageUrl ? (
        <div className="flex h-64 items-center justify-center overflow-hidden rounded-lg border border-[#929AAB]/30 bg-white">
          <img
            src={imageUrl}
            alt="Uploaded preview"
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-[#929AAB]/50 bg-white text-[#929AAB]">
          Image preview placeholder
        </div>
      )}
    </BasePanel>
  );
};

export default CurrentImagePreview;

