import React from "react";

import { SectionLabel } from "@/components/ui/section-label";

type FeaturesSectionProps = {
  body: string;
  heading: string;
  subheading: string;
};

/**
 * FeaturesSection
 * ----
 * Renders the landing page "Features" anchor section targeted by the header navigation.
 */
export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  body,
  heading,
  subheading,
}) => {
  return (
    <section className="flex flex-col items-center text-center min-h-screen px-6 py-12" id="features">
      <SectionLabel label="Features" />
      <h2 className="mt-4 text-xl font-semibold">{heading}</h2>
      <p className="mt-2 text-base">{subheading}</p>
      <p className="mt-4 text-sm text-(--text-secondary)">{body}</p>
    </section>
  );
};


