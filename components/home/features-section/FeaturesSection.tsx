import React from "react";

import { Copy, Image, Lock, type LucideIcon, Save, Sparkles } from "lucide-react";

import { SectionLabel } from "@/components/ui/section-label";
import designTokens from "@/utils/design-token";

import { FeatureCard } from "./FeatureCard";

type FeaturesSectionProps = {
  body: string;
  heading: string;
  subheading: string;
};

const ICON_MAP: Record<string, LucideIcon> = {
  Lock,
  Save,
  Copy,
  Image,
  Sparkles,
};

const FEATURES = designTokens.landing.features.map((feature) => ({
  ...feature,
  icon: ICON_MAP[feature.icon],
}));

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
    <section
      className="flex flex-col items-center text-center min-h-screen px-6 py-12"
      id="features"
    >
      <SectionLabel label="Features" />
      <h3 className="text-h3 mt-4 max-w-80 sm:max-w-120 md:max-w-160">{heading}</h3>
      <p className="text-subtitle mt-2 text-(--text-secondary)">{subheading}</p>
      <p className="text-paragraph mt-4 text-(--text-muted)">{body}</p>

      <div className="flex flex-col gap-4 mt-12 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.slice(0, 2).map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURES.slice(2).map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


