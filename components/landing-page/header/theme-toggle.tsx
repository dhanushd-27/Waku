"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Use resolvedTheme which is undefined during SSR, defaulting to "light"
  // This ensures consistent rendering between server and client
  const currentTheme = resolvedTheme ?? "light";

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-background-dark hover:text-accent-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-accent-400 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

