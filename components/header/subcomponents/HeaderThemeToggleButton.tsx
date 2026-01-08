"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { TextButton } from "@/components/ui/buttons";

type HeaderThemeToggleButtonProps = {};

/**
 * HeaderThemeToggleButton
 * ----
 * Toggles between light and dark theme using next-themes.
 */
export const HeaderThemeToggleButton: React.FC<HeaderThemeToggleButtonProps> = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  const icon = isDark ? <Sun size={18} /> : <Moon size={18} />;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <TextButton
      icon={icon}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    />
  );
};


