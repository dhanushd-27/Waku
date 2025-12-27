import React from "react";

/**
 * Footer
 * ----
 * Footer section with copyright and additional links.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="landing-section border-t border-accent-500/30 dark:border-gray-700/30">
      <div className="landing-container">
        <p className="landing-text text-center">
          © {new Date().getFullYear()} Waku. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

