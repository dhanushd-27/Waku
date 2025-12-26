"use client";

import { ThemeToggle } from "./theme-toggle";
import { MobileMenuButton } from "./mobile-menu-button";

interface MobileNavProps {
  onMenuClick?: () => void;
}

export function MobileNav({ onMenuClick }: MobileNavProps) {
  return (
    <div className="md:hidden flex items-center space-x-4">
      <ThemeToggle />
      <MobileMenuButton onClick={onMenuClick} />
    </div>
  );
}

