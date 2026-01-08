"use client";

import { useEffect, useState } from "react";

/**
 * useIsScrolled
 * ----
 * Determines whether the page has been scrolled past a given threshold,
 * used for sticky header visual treatments.
 *
 * Side effects:
 * - Subscribes to `scroll` events
 */
export function useIsScrolled(thresholdPx: number = 4) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > thresholdPx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thresholdPx]);

  return { isScrolled };
}


