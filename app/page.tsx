'use client';

import { AfterPanel } from "../components/AfterPanel";
import { BeforePanel } from "../components/BeforePanel";
import { ColorBar } from "../components/ColorBar";
import { DropdownControls } from "../components/DropdownControls";
import { PlusCard } from "../components/PlusCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEEEE] text-[#393E46] p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <header>
          <h1 className="text-2xl font-semibold">Image Layout Preview</h1>
          <p className="text-sm text-[#929AAB]">
            Upload, preview, and style your images with quick controls.
          </p>
        </header>

        <section
          className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="presentation"
        >
          <div className="lg:col-span-1">
            <PlusCard />
          </div>

          <div className="lg:col-span-2">
            <DropdownControls />
          </div>

          <div className="lg:col-span-1">
            <ColorBar />
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <BeforePanel />
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <AfterPanel />
          </div>
        </section>
      </div>
    </main>
  );
}

