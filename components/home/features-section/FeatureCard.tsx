import React from "react";

import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * FeatureCard
 * ----
 * Displays a single feature with icon, title, and description.
 * Used in the FeaturesSection to showcase product capabilities.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="feature-card">
      <Icon className="feature-card-icon" />
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};
