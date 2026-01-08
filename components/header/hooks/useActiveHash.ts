"use client";

import { useEffect, useState, useRef } from "react";

const SECTION_IDS = ["home", "features", "faq"];

/**
 * useActiveHash
 * ----
 * Tracks the current section in viewport for header nav highlighting.
 *
 * Side effects:
 * - Uses IntersectionObserver to detect visible sections
 * - Subscribes to `hashchange` events for click navigation
 */
export function useActiveHash() {
  const [activeHash, setActiveHash] = useState<string>("#home");
  const isScrollingRef = useRef(true);

  useEffect(() => {
    // Set initial hash from URL or default to #home
    const initialHash = window.location.hash || "#home";
    setActiveHash(initialHash);

    // Handle manual hash changes (click navigation)
    const handleHashChange = () => {
      isScrollingRef.current = false;
      setActiveHash(window.location.hash || "#home");
      
      // Re-enable scroll detection after a short delay
      setTimeout(() => {
        isScrollingRef.current = true;
      }, 100);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Intersection Observer for scroll-based detection
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      if (!isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          setActiveHash(newHash);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, []);

  return { activeHash, setActiveHash };
}


