import React from "react";

type ColorMode = "HEX" | "RGB";

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
        <label
          htmlFor="color-type"
          className="text-xs font-medium uppercase tracking-wide text-slate-500"
        >
          Type
        </label>
        <select
          id="color-type"
          value={mode}
          onChange={(e) => onModeChange(e.target.value as ColorMode)}
          className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs shadow-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
        >
          <option value="HEX">HEX</option>
          <option value="RGB">RGB</option>
        </select>
      </div>

      {/* Color Code */}
      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex-1">
          <input
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="h-9 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-xs font-mono text-slate-900 shadow-inner outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-200"
            aria-label="Color code"
            spellCheck={false}
          />
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-1"
          aria-label={copied ? "Copied color value" : "Copy color value"}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 1 1 1.414-1.414L8.5 11.586l6.543-6.543a1 1 0 0 1 1.414 0Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M6 2a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v1H15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2H5a2 2 0 0 1-2-2V7.5A2 2 0 0 1 5 5.5V4a2 2 0 0 1 1-1.732V2Zm2 1h4.5V2H8v1Zm-2 4.5a.5.5 0 0 0-.5.5V15a.5.5 0 0 0 .5.5h2V7a2 2 0 0 1 .293-1.036A1.99 1.99 0 0 1 9 5.5h6a.5.5 0 0 0 .5-.5V5h-1.5a2 2 0 0 1-2-2H8a2 2 0 0 1-2 2v2.5Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ColorControlsRow;


