import React from "react";
import BasePanel from "./BasePanel";

export const BeforePanel: React.FC = () => {
  return (
    <BasePanel title="Before">
      <div className="flex h-52 items-center justify-center rounded-lg border border-dashed border-[#929AAB]/50 bg-white text-[#929AAB]">
        Image preview placeholder
      </div>
    </BasePanel>
  );
};

export default BeforePanel;

