import React from "react";

import content from "@/landing-planning/landing-page-content.json";

type FooterProps = {};

/**
 * Footer
 * ----
 * Renders the landing footer content, driven by landing page content JSON.
 */
export const Footer: React.FC<FooterProps> = () => {
  const year = String(new Date().getFullYear());
  const footerText = content.footer.copyrightTemplate.replace("{year}", year);

  return (
    <footer className="px-6 py-10">
      <p className="text-small text-(--text-muted)">{footerText}</p>
    </footer>
  );
};


