import React from "react";

type ColorMode = "HEX" | "HSL" | "RGBA";

interface ColorControlsRowProps {
  mode: ColorMode;
  inputValue: string;
  copied: boolean;
  onModeChange: (mode: ColorMode) => void;
  onInputChange: (value: string) => void;
  onCopy: () => void;
}

export const ColorControlsRow: React.FC<ColorControlsRowProps> = ({
  mode,
  inputValue,
  copied,
  onModeChange,
  onInputChange,
  onCopy,
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* Color Type */}
      <div className="flex items-center gap-2">
        <select
          id="color-type"
          value={mode}
          onChange={(e) => onModeChange(e.target.value as ColorMode)}
          className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs shadow-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
        >
          <option value="HEX">HEX</option>
          <option value="HSL">HSL</option>
          <option value="RGBA">RGBA</option>
        </select>
      </div>

      {/* Color Code */}
      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex-1 group">
          <input
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="h-9 w-full rounded-md border border-slate-200 bg-slate-50 px-3 pr-9 text-xs font-mono text-slate-900 shadow-inner outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-200"
            aria-label="Color code"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={onCopy}
            className="absolute inset-y-0 right-2 my-auto inline-flex h-5 w-5 items-center justify-center rounded text-slate-500 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100 focus:outline-none"
            aria-label={copied ? "Copied color value" : "Copy color value"}
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-emerald-500"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorControlsRow;


