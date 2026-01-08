import React from "react";

type SectionLabelProps = {
  label: string;
};

/**
 * SectionLabel
 * ----
 * A small pill-shaped label that displays the current section name.
 * Used to indicate which section of the landing page is being viewed.
 */
export const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div className="section-label-pill">
      {label}
    </div>
  );
};

