"use client";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-accent-200 dark:bg-gray-900/90 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

