import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HomeSection } from "@/components/home/home-section";

import content from "@/landing-planning/landing-page-content.json";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header stays outside so sticky works relative to viewport */}
      <Header />

      {/* Hero section fills remaining viewport height below header */}
      <div className="flex h-[calc(100vh-var(--header-offset,96px))] flex-col">
        <HomeSection {...content.home} />
      </div>

      <main className="flex flex-1 flex-col">
        <FeaturesSection {...content.features} />
        <FaqSection {...content.faq} />
        <Footer />
      </main>
    </div>
  );
}
