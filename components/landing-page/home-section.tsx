"use client";

import Link from "next/link";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EEEEEE] to-[#E5E7EB] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#393E46] mb-6">
            Resize Images for
            <br />
            <span className="text-[#6366f1]">Every Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6b7280] mb-8 max-w-3xl mx-auto">
            Resize your images based on platform requirements and aspect ratios.
            Preview your posts across all platforms before publishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-[#6366f1] text-white rounded-lg text-lg font-semibold hover:bg-[#4f46e5] transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white text-[#393E46] rounded-lg text-lg font-semibold hover:bg-[#f3f4f6] transition-colors border border-[#E5E7EB]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

