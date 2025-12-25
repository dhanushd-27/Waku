import React from "react";

const labelClass = "text-sm font-medium text-background-dark";
const selectClass =
  "w-full rounded-full border border-accent-200/50 bg-white pl-4 pr-8 py-2 text-sm text-background-dark shadow-sm focus:border-background-dark focus:outline-none focus:ring-2 focus:ring-accent-200/30";

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
        <p className="text-xs text-accent-300">{helperText}</p>
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
            className="h-4 w-4 text-background-dark"
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

export default Dropdown;

