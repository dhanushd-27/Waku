"use client";

import { DropdownControls } from "@/components/dropdown-controls";
import { AppHeader } from "@/components/app-header";
import Upload from "@/components/upload";
import Tools from "@/components/tools";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEEEE] text-[#393E46] flex items-center justify-center">
      <div className="mx-auto max-w-6xl space-y-4">
        <AppHeader />
        <section
          className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          role="presentation"
        >
          <div className="lg:col-span-1">
            <Upload />
          </div>

          <div className="lg:col-span-2">
            <DropdownControls />
          </div>

          <div className="lg:col-span-1">
            <Tools />
          </div>
        </section>
      </div>
    </main>
  );
}
