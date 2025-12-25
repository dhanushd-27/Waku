"use client";

import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What image formats are supported?",
    answer:
      "Waku supports JPG, JPEG, PNG, and WEBP formats. You can upload images up to 20 MB in size.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Currently, Waku supports Instagram, LinkedIn, X (Twitter), and WhatsApp. We're continuously adding support for more platforms.",
  },
  {
    question: "Can I customize aspect ratios?",
    answer:
      "Yes! You can choose from platform-specific aspect ratios or set custom dimensions to fit your specific needs.",
  },
  {
    question: "How do I download my resized image?",
    answer:
      "After uploading your image and selecting your preferred platform and aspect ratio, click the 'Download image' button. You can also adjust the download quality to balance file size and image quality.",
  },
  {
    question: "Is my image data stored?",
    answer:
      "No, all image processing happens in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.",
  },
  {
    question: "Can I preview how my image will look?",
    answer:
      "Absolutely! Waku provides a real-time preview of how your image will appear with the selected aspect ratio and background color before you download.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-white to-accent-900"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-accent-300 max-w-2xl mx-auto">
            Everything you need to know about using Waku
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-accent-200 shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent-900 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-background-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-accent-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-accent-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

