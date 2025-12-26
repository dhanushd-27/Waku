import React from "react";

const labelClass = "text-sm font-medium text-background-dark";
const fieldClass =
  "w-full rounded-lg border border-accent-200/50 bg-white px-3 py-2 text-sm text-background-dark shadow-sm";

export const ImageTypeDropdown: React.FC = () => {
  return (
    <label className="space-y-1">
      <span className={labelClass}>Effect</span>
      <p className="text-xs text-accent-300">Add Effects</p>
      <button
        type="button"
        className={`flex items-center gap-2 rounded-full border border-accent-200/50 bg-white px-4 py-2 text-xs text-accent-300 shadow-sm cursor-default`}
        disabled
        aria-disabled="true"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-accent-200 mr-1"></span>
        <span className="text-accent-200">Coming soon</span>
      </button>
    </label>
  );
};

