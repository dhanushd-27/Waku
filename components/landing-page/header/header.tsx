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
 */
export const Header: React.FC = () => {
  return (
    <header className="header-capsule">
      <Logo />
      <Navigation />
      <div className="flex items-center gap-2">
        <GetStartedButton />
        <ThemeToggle />
      </div>
    </header>
  );
};

