"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import SellerLeadsBanner from "@/components/sections/seller-leads-banner";
import TruBrokerBanner from "@/components/sections/tru-broker-banner";
import QuickLinksCards from "@/components/sections/quick-links-cards";
import NewProjectsSlider from "@/components/sections/new-projects-slider";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <QuickLinksCards />
        <SellerLeadsBanner />
        <TruBrokerBanner />
        <NewProjectsSlider />
        <Footer />
      </main>
    </div>
  );
}
