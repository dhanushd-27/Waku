"use client";

import React from "react";

import { useActiveHash, useHeaderOffsetCssVar, useIsScrolled } from "./hooks";
import {
  HeaderGetStartedButton,
  HeaderLogo,
  HeaderMobileMenu,
  HeaderNav,
  HeaderThemeToggleButton,
} from "./subcomponents";

type HeaderProps = {};

/**
 * Header
 * ----
 * Renders the pill-style sticky header with logo, navigation, theme toggle,
 * and CTA, including a shadow-on-scroll treatment and a mobile dropdown menu.
 */
export const Header: React.FC<HeaderProps> = () => {
  const { activeHash, setActiveHash } = useActiveHash();
  const { headerRef } = useHeaderOffsetCssVar();
  const { isScrolled } = useIsScrolled(4);

  const pillClasses = ["header-pill", isScrolled ? "header-pill-scrolled" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className="header-shell">
      <div className={pillClasses} ref={headerRef}>
        <HeaderLogo />

        <HeaderNav activeHash={activeHash} onNavigate={setActiveHash} />

        <div className="header-actions">
          <HeaderThemeToggleButton />
          <HeaderGetStartedButton />
          <HeaderMobileMenu activeHash={activeHash} onNavigate={setActiveHash} />
        </div>
      </div>
    </header>
  );
};
