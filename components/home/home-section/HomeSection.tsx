import React from "react";

type HomeSectionProps = {
  body: string;
  heading: string;
  subheading: string;
};

/**
 * HomeSection
 * ----
 * Renders the landing page "Home" anchor section targeted by the header navigation.
 */
export const HomeSection: React.FC<HomeSectionProps> = ({ body, heading, subheading }) => {
  return (
    <section className="min-h-screen px-6 py-12" id="home">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p className="mt-2 text-base">{subheading}</p>
      <p className="mt-4 text-sm text-(--text-secondary)">{body}</p>
    </section>
  );
};


