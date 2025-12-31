"use client";

import React from "react";
import { NavLink } from "./NavLink";

type NavigationProps = {
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
};

/**
 * Navigation
 * ----
 * Renders the landing page navigation and highlights the active section.
 */
export const Navigation: React.FC<NavigationProps> = ({
  activeSectionId,
  onNavigate,
}) => {
  const links = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-4 sm:gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              isActive={activeSectionId === link.id}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

