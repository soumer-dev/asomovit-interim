"use client";

import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PresentationSection from "@/components/PresentationSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import QualitySection from "@/components/QualitySection";
import DualCtaSection from "@/components/DualCtaSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import WhatsAppCta from "@/components/WhatsAppCta";

// Lazy-load heavy modal components — they are never needed on initial paint
const DevisModal = lazy(() => import("@/components/DevisModal"));
const CvModal = lazy(() => import("@/components/CvModal"));

export default function HomePage() {
  const [devisOpen, setDevisOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onDevisClick={() => setDevisOpen(true)} />
      <HeroSection
        onDevisClick={() => setDevisOpen(true)}
        onCvClick={() => setCvOpen(true)}
      />
      <PresentationSection />
      <ServicesSection />
      <SectorsSection />
      <ProcessSection />
      <WhyUsSection />
      <QualitySection />
      <DualCtaSection
        onDevisClick={() => setDevisOpen(true)}
        onCvClick={() => setCvOpen(true)}
      />
      <FinalCtaSection onDevisClick={() => setDevisOpen(true)} />
      <Footer />

      {/* Modals are lazy-loaded — only fetched when first opened */}
      <Suspense fallback={null}>
        {devisOpen && (
          <DevisModal open={devisOpen} onOpenChange={setDevisOpen} />
        )}
        {cvOpen && (
          <CvModal open={cvOpen} onOpenChange={setCvOpen} />
        )}
      </Suspense>

      <WhatsAppCta />
    </div>
  );
}
