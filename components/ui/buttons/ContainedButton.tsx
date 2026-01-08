"use client";

import React from "react";
import Link from "next/link";

type ContainedButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

/**
 * ContainedButton
 * ----
 * Provides a shared primary button style, optionally rendering
 * as a Next.js Link for navigation.
 */
export const ContainedButton: React.FC<ContainedButtonProps> = ({
  children,
  className,
  href,
  onClick,
  type = "button",
}) => {
  const classes = ["button-base", "button-contained", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
};


