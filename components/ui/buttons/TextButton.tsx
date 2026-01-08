"use client";

import React from "react";

type TextButtonProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

/**
 * TextButton
 * ----
 * Provides a shared text-style button used across the app
 * for lightweight actions (e.g. header toggles, menu triggers).
 */
export const TextButton: React.FC<TextButtonProps> = ({
  children,
  className,
  icon,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={["button-base", "button-text", className].filter(Boolean).join(" ")}
      onClick={onClick}
      type={type}
    >
      {icon}
      {children}
    </button>
  );
};


