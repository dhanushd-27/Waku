import React from "react";

import { SectionLabel } from "@/components/ui/section-label";

import { FaqQuestion } from "./FaqQuestion";

type FaqSectionProps = {
  body: string;
  heading: string;
  subheading: string;
  questions?: Array<{ question: string; answer: string }>;
};

/**
 * FaqSection
 * ----
 * Renders the landing page "FAQ" anchor section targeted by the header navigation.
 * Supports an optional list of FAQ entries.
 */
export const FaqSection: React.FC<FaqSectionProps> = ({
  body,
  heading,
  questions,
  subheading,
}) => {
  return (
    <section className="flex flex-col items-center text-center min-h-screen px-6 py-12" id="faq">
      <SectionLabel label="FAQ" />
      <h2 className="text-h2 mt-4">{heading}</h2>
      <p className="text-subtitle mt-2 text-(--text-secondary)">{subheading}</p>

      {questions && questions.length > 0 ? (
        <div className="mt-6 grid gap-4">
          {questions.map((q) => (
            <FaqQuestion answer={q.answer} key={q.question} question={q.question} />
          ))}
        </div>
      ) : (
        <p className="text-paragraph mt-4 text-(--text-muted)">{body}</p>
      )}
    </section>
  );
};


