"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { TextButton } from "@/components/ui/buttons";

type HeaderThemeToggleButtonProps = {};

/**
 * HeaderThemeToggleButton
 * ----
 * Toggles between light and dark theme with smooth transition.
 */
export const HeaderThemeToggleButton: React.FC<HeaderThemeToggleButtonProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const icon = isDark ? <Sun size={18} /> : <Moon size={18} />;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleThemeToggle = () => {
    // Add transition class to enable smooth color transitions
    document.documentElement.classList.add("theme-transitioning");
    
    // Change theme
    setTheme(isDark ? "light" : "dark");
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 700);
  };

  if (!isMounted) return null;

  return <TextButton icon={icon} onClick={handleThemeToggle} />;
};


