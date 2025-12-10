import React from "react";

type BasePanelProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

export const BasePanel: React.FC<BasePanelProps> = ({
  title,
  children,
  className,
  footer,
}) => {
  const baseClasses =
    "h-full rounded-xl border border-[#929AAB]/30 bg-[#F7F7F7] p-4 shadow-sm";
  const mergedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={mergedClasses}>
      {title ? (
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-[#393E46]">{title}</h2>
        </div>
      ) : null}
      <div className="space-y-3">{children}</div>
      {footer ? <div className="mt-4 text-sm text-[#929AAB]">{footer}</div> : null}
    </div>
  );
};

export default BasePanel;

