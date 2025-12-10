import React from "react";
import BasePanel from "./BasePanel";

export const AfterPanel: React.FC = () => {
  return (
    <BasePanel title="After" footer="Processed image preview">
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-[#929AAB]/50 bg-white text-[#929AAB]">
        Processed image placeholder
      </div>
    </BasePanel>
  );
};

export default AfterPanel;

