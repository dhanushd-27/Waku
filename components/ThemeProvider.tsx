"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

/**
 * ThemeProvider
 * ----
 * Provides app-wide theme state (light/dark) using `next-themes`,
 * persisting the user's choice to localStorage.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};