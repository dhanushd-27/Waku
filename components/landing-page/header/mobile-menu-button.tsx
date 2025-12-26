"use client";

interface MobileMenuButtonProps {
  onClick?: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-background-dark hover:text-accent-500 dark:text-gray-300"
      aria-label="Toggle mobile menu"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  );
}

