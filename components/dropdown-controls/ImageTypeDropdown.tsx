import React from "react";

const labelClass = "text-sm font-medium text-primary";

export const ImageTypeDropdown: React.FC = () => {
  return (
    <label className="space-y-1">
      <span className={labelClass}>Effect</span>
      <p className="text-xs text-muted">Add Effects</p>
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border bg-[color:var(--color-primary-white)] px-4 py-2 text-xs text-muted shadow-sm cursor-default border-[color:rgba(167,167,167,0.5)]"
        disabled
        aria-disabled="true"
      >
        <span className="inline-block h-2 w-2 rounded-full mr-1 bg-[color:var(--color-neutral-light)]"></span>
        <span className="text-muted">Coming soon</span>
      </button>
    </label>
  );
};

