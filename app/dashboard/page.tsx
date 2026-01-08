import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * DashboardPage
 * ----
 * Placeholder dashboard page displaying a centered "Coming Soon!" message.
 * Supports dark/light mode theming and responsive typography.
 */
export default function DashboardPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-(--background)">
      <Link
        href="/"
        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm text-(--text-primary) transition-colors hover:border-(--color-trinidad-500) hover:text-(--color-trinidad-500) md:left-6 md:top-6"
        style={{ borderColor: "rgba(var(--border), 0.7)" }}
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <h1 className="text-sm font-semibold text-(--text-primary) md:text-xl">
        Coming Soon!
      </h1>
    </main>
  );
}

