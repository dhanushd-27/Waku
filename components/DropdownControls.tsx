import React from "react";
import BasePanel from "./BasePanel";

const labelClass = "text-sm font-medium text-[#393E46]";
const selectClass =
  "w-full rounded-lg border border-[#929AAB]/50 bg-white px-3 py-2 text-sm text-[#393E46] shadow-sm focus:border-[#393E46] focus:outline-none focus:ring-2 focus:ring-[#929AAB]/30";

export const DropdownControls: React.FC = () => {
  return (
    <BasePanel title="Controls">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <label className="space-y-1">
          <span className={labelClass}>Platform</span>
          <select className={selectClass} defaultValue="">
            <option value="" disabled>
              Choose platform
            </option>
            <option>Web</option>
            <option>iOS</option>
            <option>Android</option>
            <option>Desktop</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className={labelClass}>Aspect Ratio</span>
          <select className={selectClass} defaultValue="">
            <option value="" disabled>
              Select ratio
            </option>
            <option>1:1 (Square)</option>
            <option>4:5 (Portrait)</option>
            <option>16:9 (Landscape)</option>
            <option>9:16 (Vertical)</option>
          </select>
        </label>

        <label className="space-y-1">
          <span className={labelClass}>Type of Image</span>
          <select className={selectClass} defaultValue="">
            <option value="" disabled>
              Pick an effect
            </option>
            <option>Blur effect</option>
            <option>Colour bar</option>
            <option>Auto pick from image</option>
          </select>
        </label>
      </div>
    </BasePanel>
  );
};

export default DropdownControls;

