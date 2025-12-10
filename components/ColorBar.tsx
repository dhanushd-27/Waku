import React from "react";
import BasePanel from "./BasePanel";

export const ColorBar: React.FC = () => {
  return (
    <BasePanel>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div
            className="h-24 w-24 rounded-full border border-[#929AAB]/50 shadow-inner"
            style={{
              background:
                "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
            }}
            aria-label="Colour wheel"
          />
          <span className="text-sm font-medium text-[#393E46]">Colour Bar</span>
        </div>
      </div>
    </BasePanel>
  );
};

export default ColorBar;

