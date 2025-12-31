import React from "react";

type NavLinkProps = {
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
  isActive,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </button>
  );
};

