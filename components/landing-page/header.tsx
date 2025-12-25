"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-accent-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-background-dark">
              Waku
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-background-dark hover:text-accent-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-background-dark hover:text-accent-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-background-dark hover:text-accent-500 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
            >
              Get Started
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-background-dark hover:text-accent-500">
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
          </div>
        </div>
      </div>
    </header>
  );
}

