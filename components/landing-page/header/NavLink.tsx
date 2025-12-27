import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

/**
 * NavLink
 * ----
 * Navigation link component with hover effects for header navigation.
 */
export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="nav-link"
    >
      {children}
    </a>
  );
};

