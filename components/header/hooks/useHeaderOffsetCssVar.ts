"use client";

import { useEffect, useRef } from "react";

/**
 * useHeaderOffsetCssVar
 * ----
 * Measures the header pill height and writes it to a CSS variable used for
 * hash navigation offset (preventing sections from being covered by the sticky header).
 *
 * Side effects:
 * - Updates `--header-offset` on the document root using ResizeObserver
 */
export function useHeaderOffsetCssVar() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const update = () => {
      const height = element.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    };

    update();

    const observer = new ResizeObserver(() => update());
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { headerRef };
}


