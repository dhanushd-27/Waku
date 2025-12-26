"use client";

import Link from "next/link";

export function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="text-2xl font-bold text-background-dark dark:text-white">
        Waku
      </Link>
    </div>
  );
}

