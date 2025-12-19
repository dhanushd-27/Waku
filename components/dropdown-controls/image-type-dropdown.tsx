import React from "react";

const labelClass = "text-sm font-medium text-[#393E46]";
const fieldClass =
  "w-full rounded-lg border border-[#929AAB]/50 bg-white px-3 py-2 text-sm text-[#393E46] shadow-sm";

export const ImageTypeDropdown: React.FC = () => {
  return (
    <label className="space-y-1">
      <span className={labelClass}>Effect</span>
      <p className="text-xs text-[#6B7280]">Add Effects</p>
      <button
        type="button"
        className={`flex items-center gap-2 rounded-full border border-[#929AAB]/50 bg-white px-4 py-2 text-xs text-[#6B7280] shadow-sm cursor-default`}
        disabled
        aria-disabled="true"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-[#9CA3AF] mr-1"></span>
        <span className="text-[#9CA3AF]">Coming soon</span>
      </button>
    </label>
  );
};

export default ImageTypeDropdown;
