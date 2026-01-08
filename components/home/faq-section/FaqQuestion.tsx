"use client";

import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

type FaqQuestionProps = {
  answer: string;
  question: string;
};

/**
 * FaqQuestion
 * ----
 * Renders an accordion-style FAQ item with animated icon and collapsible answer.
 */
export const FaqQuestion: React.FC<FaqQuestionProps> = ({ answer, question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-2xl bg-(--surface-elevated) overflow-hidden text-left transition-shadow duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 cursor-pointer transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-paragraph font-semibold text-(--text-primary) group-hover:text-(--color-trinidad-600) transition-colors duration-300">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-(--text-muted) group-hover:text-(--color-trinidad-600) transition-all duration-300 ease-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-body px-6 pb-4 text-(--text-secondary)">{answer}</p>
        </div>
      </div>
    </div>
  );
};


