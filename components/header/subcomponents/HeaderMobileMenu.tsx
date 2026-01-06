"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { TextButton } from "@/components/ui/buttons";

import { HEADER_NAV_OPTIONS } from "../constants/HeaderNavOptions";

type HeaderMobileMenuProps = {
  activeHash: string;
  onNavigate?: (hash: string) => void;
};

/**
 * HeaderMobileMenu
 * ----
 * Provides a mobile menu button that toggles a dropdown for header navigation.
 *
 * Side effects:
 * - Handles outside click and Escape key to close the dropdown
 */
export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  activeHash,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(event.target as Node)) return;
      setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className="header-mobile-menu" ref={containerRef}>
      <TextButton
        icon={isOpen ? <X size={18} /> : <Menu size={18} />}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen ? (
        <div className="header-mobile-dropdown" role="menu">
          {HEADER_NAV_OPTIONS.map((option) => (
            <Link
              className="header-mobile-dropdown-link"
              data-active={String(activeHash === option.href)}
              href={option.href}
              key={option.href}
              onClick={() => {
                onNavigate?.(option.href);
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {option.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};


