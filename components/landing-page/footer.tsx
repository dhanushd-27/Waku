import React from "react";

/**
 * Footer
 * ----
 * Footer section with copyright and additional links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="landing-section border-t border-[color:rgba(167,167,167,0.35)]">
      <div className="landing-container">
        <p className="landing-text text-center">
          © {new Date().getFullYear()} Waku. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

