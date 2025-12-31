"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

/**
 * ThemeToggle
 * ----
 * Toggles between light and dark theme, defaulting to system
 * when no saved preference exists.
 */
export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!isMounted) {
    return (
      <button
        type="button"
        className="theme-toggle-button"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle-button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={handleToggle}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

