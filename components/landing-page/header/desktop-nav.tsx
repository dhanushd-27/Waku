"use client";

import Link from "next/link";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <ThemeToggle />
      <Link
        href="/dashboard"
        className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
      >
        Get Started
      </Link>
    </nav>
  );
}

