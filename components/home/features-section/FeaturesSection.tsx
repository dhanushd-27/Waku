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
      <h2 className="text-h2 mt-4">{heading}</h2>
      <p className="text-subtitle mt-2 text-(--text-secondary)">{subheading}</p>
      <p className="text-paragraph mt-4 text-(--text-muted)">{body}</p>
    </section>
  );
};


