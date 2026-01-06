import React from "react";

type FaqQuestionProps = {
  answer: string;
  question: string;
};

/**
 * FaqQuestion
 * ----
 * Renders a single FAQ question + answer pair for the FAQ section.
 */
export const FaqQuestion: React.FC<FaqQuestionProps> = ({ answer, question }) => {
  return (
    <div className="rounded-2xl bg-(--surface-elevated) px-6 py-4">
      <h3 className="text-sm font-semibold">{question}</h3>
      <p className="mt-2 text-sm text-(--text-secondary)">{answer}</p>
    </div>
  );
};


