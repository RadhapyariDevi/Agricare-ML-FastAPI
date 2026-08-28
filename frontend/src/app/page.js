import HeroSection from "@/components/landing/HeroSection";
import WorksSection from "@/components/landing/WorksSection";
import AgriCareSection from "@/components/landing/AgriCareSection";

import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <WorksSection />
      <AgriCareSection />
      <Footer />
    </div>
  );
}