"use client";

import React from "react";
import Link from "next/link";

type HeaderLogoProps = {};

/**
 * HeaderLogo
 * ----
 * Renders the Waku brand mark and routes to the top-of-page anchor.
 */
export const HeaderLogo: React.FC<HeaderLogoProps> = () => {
  return (
    <Link className="inline-flex items-center" href="#home">
      <img src="/waku.png" alt="Waku Logo" className="h-8 w-auto" />
    </Link>
  );
};


