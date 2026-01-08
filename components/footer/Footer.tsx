import React from "react";

import { Globe, Linkedin, Twitter } from "lucide-react";

import content from "@/landing-planning/landing-page-content.json";

type FooterProps = {};

const ICON_MAP: Record<string, React.ElementType> = {
  Twitter,
  Globe,
  Linkedin,
};

/**
 * Footer
 * ----
 * Renders the landing footer content with creator profile links.
 */
export const Footer: React.FC<FooterProps> = () => {
  const year = String(new Date().getFullYear());
  const footerText = content.footer.copyrightTemplate.replace("{year}", year);
  const { creator } = content.footer;

  return (
    <footer className="px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-small text-(--text-muted)">{footerText}</p>
      
      {creator && (
        <div className="flex items-center gap-3">
          <span className="text-small text-(--text-muted)">by {creator.name}</span>
          <div className="flex items-center gap-2">
            {creator.links.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full text-(--text-muted) hover:text-(--color-trinidad-600) hover:bg-(--surface-elevated) transition-colors duration-200"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </footer>
  );
};


