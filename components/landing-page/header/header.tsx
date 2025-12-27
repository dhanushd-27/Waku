"use client";

import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { GetStartedButton } from "./GetStartedButton";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Header
 * ----
 * Main header component with capsule shape containing logo, navigation,
 * and action buttons (Get Started and Theme Toggle).
 * Fixed position with scroll-based border visibility.
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-capsule ${
        isScrolled ? "header-capsule-scrolled" : "header-capsule-initial"
      }`}
    >
      <Logo />
      <Navigation />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <GetStartedButton />
      </div>
    </header>
  );
};

