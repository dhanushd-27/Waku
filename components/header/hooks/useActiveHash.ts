"use client";

import { useEffect, useState } from "react";

/**
 * useActiveHash
 * ----
 * Tracks the current location hash for header nav highlighting.
 *
 * Side effects:
 * - Subscribes to `hashchange` events
 */
export function useActiveHash() {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    setActiveHash(window.location.hash || "#home");

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { activeHash, setActiveHash };
}


