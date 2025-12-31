import Image from "next/image";
import React from "react";

/**
 * Logo
 * ----
 * Renders the Waku logo image and links to the Home section.
 */
export const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Go to Home">
      <Image src="/waku.png" alt="Waku" width={32} height={32} priority />
    </a>
  );
};

