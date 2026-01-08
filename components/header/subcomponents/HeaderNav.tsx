"use client";

import React from "react";
import Link from "next/link";

import { HEADER_NAV_OPTIONS } from "../constants/HeaderNavOptions";

type HeaderNavProps = {
  activeHash: string;
  onNavigate?: (hash: string) => void;
};

/**
 * HeaderNav
 * ----
 * Renders the desktop header navigation and applies active/hover/pressed states.
 */
export const HeaderNav: React.FC<HeaderNavProps> = ({ activeHash, onNavigate }) => {
  return (
    <nav aria-label="Primary" className="header-nav">
      {HEADER_NAV_OPTIONS.map((option) => (
        <Link
          className="header-nav-link"
          data-active={String(activeHash === option.href)}
          href={option.href}
          key={option.href}
          onClick={() => onNavigate?.(option.href)}
        >
          {option.label}
        </Link>
      ))}
    </nav>
  );
};


