"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * HeaderLogo
 * ----
 * Renders the Waku brand mark and routes to the top-of-page anchor.
 */
export const HeaderLogo = () => {
  return (
    <Link className="inline-flex items-center" href="/">
      <Image
        alt="Waku Logo"
        className="h-8 w-auto"
        height={32}
        src="/waku.png"
        width={128}
        priority
      />
    </Link>
  );
};


