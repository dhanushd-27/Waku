import React from "react";
import BasePanel from "../BasePanel";
import PlatformDropdown from "./PlatformDropdown";
import AspectRatioDropdown from "./AspectRatioDropdown";
import ImageTypeDropdown from "./ImageTypeDropdown";
import ResultImagePreview from "../ResultImagePreview";

export const DropdownControls: React.FC = () => {
  return (
    <>
      <BasePanel title="Controls">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <PlatformDropdown />
          <AspectRatioDropdown />
          <ImageTypeDropdown />
        </div>
      <ResultImagePreview />
      </BasePanel>
    </>
  );
};

export default DropdownControls;

