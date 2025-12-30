import React from "react";

/**
 * BasePanel
 * ----------------
 * Reusable panel container component that provides consistent
 * styling and layout for feature sections. Supports optional
 * title, footer, and custom className merging.
 */
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
  const baseClasses = "panel-surface";
  const mergedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <div className={mergedClasses}>
      {title ? (
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-primary">{title}</h2>
        </div>
      ) : null}
      <div className="space-y-3">{children}</div>
      {footer ? <div className="mt-4 text-sm text-muted">{footer}</div> : null}
    </div>
  );
};


