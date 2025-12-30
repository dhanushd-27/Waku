import React from "react";

const labelClass = "text-sm font-medium text-primary";
const selectClass =
  "w-full rounded-full border bg-[color:var(--color-primary-white)] pl-4 pr-8 py-2 text-sm text-primary shadow-sm focus:outline-none focus:ring-2 border-[color:rgba(167,167,167,0.5)] focus:ring-[color:rgba(232,80,2,0.15)] focus:border-[color:var(--color-brand-orange)]";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
  helperText?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  helperText,
}) => {
  return (
    <label className="space-y-1">
      <span className={labelClass}>{label}</span>
      {helperText && (
        <p className="text-xs text-muted">{helperText}</p>
      )}
      <div className="relative">
        <select
          className={`${selectClass} appearance-none pr-10`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="h-4 w-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </label>
  );
};


