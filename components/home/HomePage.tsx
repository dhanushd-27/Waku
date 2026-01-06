import React from "react";

import content from "@/landing-planning/landing-page-content.json";
import { Footer } from "@/components/footer";

import { FeaturesSection } from "./features-section";
import { FaqSection } from "./faq-section";
import { HomeSection } from "./home-section";

type HomePageProps = {};

/**
 * HomePage
 * ----
 * Renders the landing page sections targeted by the header navigation.
 */
export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main className="min-h-screen">
      <HomeSection {...content.home} />
      <FeaturesSection {...content.features} />
      <FaqSection {...content.faq} />
      <Footer />
    </main>
  );
};


