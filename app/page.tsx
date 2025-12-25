import {
  Header,
  HomeSection,
  FeaturesSection,
  FAQSection,
  Footer,
} from "@/components/landing-page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-background-dark">
      <Header />
      <HomeSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
