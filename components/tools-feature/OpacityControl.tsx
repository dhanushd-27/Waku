import React from "react";

type OpacityControlProps = {
  opacity: number;
  onChange: (value: number) => void;
};

export const OpacityControl: React.FC<OpacityControlProps> = ({ opacity, onChange }) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label htmlFor="opacity" className="text-sm font-medium text-primary">
        Opacity (%)
      </label>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <input
            type="number"
            min={0}
            max={100}
            value={opacity}
            onChange={(event) => onChange(Number(event.target.value))}
            aria-label="Opacity percent"
            className="h-10 w-16 rounded-lg border bg-[color:var(--color-primary-white)] px-2 text-sm text-primary shadow-inner focus:outline-none border-[color:rgba(167,167,167,0.4)] focus:border-[color:var(--color-brand-orange)]"
          />
          <span className="text-sm text-primary">%</span>
        </div>
      </div>
    </div>
  );
};

