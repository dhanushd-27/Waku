"use client";
import { Tools } from "../components/tools";
import { DropdownControls } from "../components/dropdown-controls";
import { Upload } from "../components/upload";

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

