import {
  Header,
  HomeSection,
  FeaturesSection,
  ContactSection,
  Footer,
} from "@/components/landing-page";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEEEEE] text-[#393E46]">
      <Header />
      <HomeSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
