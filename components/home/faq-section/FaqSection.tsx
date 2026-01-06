import React from "react";

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
    <section className="min-h-screen px-6 py-12" id="faq">
      <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="mt-2 text-base">{subheading}</p>

      {questions && questions.length > 0 ? (
        <div className="mt-6 grid gap-4">
          {questions.map((q) => (
            <FaqQuestion answer={q.answer} key={q.question} question={q.question} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-(--text-secondary)">{body}</p>
      )}
    </section>
  );
};


