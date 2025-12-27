import React from "react";
import { NavLink } from "./NavLink";

/**
 * Navigation
 * ----
 * Renders navigation links for Home, Features, and FAQ sections.
 */
export const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center gap-6">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#faq">FAQ&apos;s</NavLink>
    </nav>
  );
};

