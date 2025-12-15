'use client';

import { useState } from "react";
import { ResultImagePreview } from "../components/ResultImagePreview";
import { CurrentImagePreview } from "../components/CurrentImagePreview";
import { BackgroundColor } from "../components/BackgroundColor";
import { DropdownControls } from "../components/DropdownControls";
import { PlusCard } from "../components/PlusCard";

export default function Home() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

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
            <PlusCard onImageSelected={setImagePreviewUrl} />
          </div>

          <div className="lg:col-span-2">
            <DropdownControls />
          </div>

          <div className="lg:col-span-1">
            <BackgroundColor />
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <CurrentImagePreview imageUrl={imagePreviewUrl} />
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <ResultImagePreview />
          </div>
        </section>
      </div>
    </main>
  );
}

