import Image from "next/image";
import React from "react";

/**
 * Logo
 * ----
 * Renders the Waku logo image and scrolls to the Home section.
 */
type LogoProps = {
  onClick?: () => void;
};

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-2"
      aria-label="Go to Home"
      onClick={onClick}
    >
      <Image src="/waku.png" alt="Waku" width={32} height={32} priority />
    </button>
  );
};

