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
    "h-full rounded-xl border border-accent-200/30 bg-white p-4 shadow-sm";
  const mergedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={mergedClasses}>
      {title ? (
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-background-dark">{title}</h2>
        </div>
      ) : null}
      <div className="space-y-3">{children}</div>
      {footer ? <div className="mt-4 text-sm text-accent-200">{footer}</div> : null}
    </div>
  );
};

export default BasePanel;

