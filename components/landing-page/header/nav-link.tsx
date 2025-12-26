"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-background-dark hover:text-accent-500 transition-colors dark:text-gray-300 dark:hover:text-accent-400 ${className}`}
    >
      {children}
    </Link>
  );
}

