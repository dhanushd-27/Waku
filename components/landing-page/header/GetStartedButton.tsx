import React from "react";
import Link from "next/link";

/**
 * GetStartedButton
 * ----
 * Primary call-to-action that navigates users to the dashboard.
 */
export const GetStartedButton: React.FC = () => {
  return (
    <Link href="/dashboard" className="button-primary">
      Get Started
    </Link>
  );
};

