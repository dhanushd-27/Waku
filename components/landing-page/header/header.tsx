"use client";

import React from "react";

import { GetStartedButton } from "./GetStartedButton";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = ["home", "features", "faq"] as const;

/**
 * Header
 * ----
 * Renders the fixed capsule header with logo, centered navigation,
 * theme toggle, and primary call-to-action.
 */
export const Header: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = React.useState("home");
  const [isScrolled, setIsScrolled] = React.useState(false);

  const scrollToSection = React.useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSectionId(sectionId);
  }, []);

  React.useEffect(() => {
    const getActiveSectionId = () => {
      const offset = 120;
      let current = "home";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        if (top - offset <= 0) current = id;
      }

      return current;
    };

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;

        setIsScrolled(window.scrollY > 8);
        setActiveSectionId(getActiveSectionId());
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`header-capsule ${
        isScrolled ? "header-capsule-scrolled" : "header-capsule-initial"
      }`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-3">
        <Logo onClick={() => scrollToSection("home")} />

        <div className="hidden sm:flex justify-center">
          <Navigation
            activeSectionId={activeSectionId}
            onNavigate={scrollToSection}
          />
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle />
          <GetStartedButton />
        </div>
      </div>
    </header>
  );
};

