"use client";

import Link from "next/link";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-accent-900 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background-dark mb-6">
            Resize Images for
            <br />
            <span className="text-accent-500">Every Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-300 mb-8 max-w-3xl mx-auto">
            Resize your images based on platform requirements and aspect ratios.
            Preview your posts across all platforms before publishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-accent-500 text-white rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white text-background-dark rounded-lg text-lg font-semibold hover:bg-accent-900 transition-colors border border-accent-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

