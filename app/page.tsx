import {
  Header,
  HomeSection,
  FeaturesSection,
  FaqSection,
  Footer,
} from "@/components/landing-page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-background-dark text-background-dark dark:text-white">
      <Header />
      <div className="pt-24">
        <HomeSection />
        <FeaturesSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
