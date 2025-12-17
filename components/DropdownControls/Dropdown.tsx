import React from "react";

const labelClass = "text-sm font-medium text-[#393E46]";
const selectClass =
  "w-full rounded-lg border border-[#929AAB]/50 bg-white px-3 py-2 text-sm text-[#393E46] shadow-sm focus:border-[#393E46] focus:outline-none focus:ring-2 focus:ring-[#929AAB]/30";

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
        <p className="text-xs text-[#6B7280]">{helperText}</p>
      )}
      <select
        className={selectClass}
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
    </label>
  );
};

export default Dropdown;

