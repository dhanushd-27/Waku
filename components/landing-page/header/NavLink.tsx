import React from "react";

type NavLinkProps = {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * NavLink
 * ----
 * Renders a navigation link with active + hover styling.
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  isActive,
  onClick,
  children,
}) => {
  return (
    <a
      href={href}
      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

