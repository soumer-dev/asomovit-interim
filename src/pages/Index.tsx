import { useState } from "react";
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
import DevisModal from "@/components/DevisModal";
import CvModal from "@/components/CvModal";

const Index = () => {
  const [devisOpen, setDevisOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onDevisClick={() => setDevisOpen(true)} />
      <HeroSection onDevisClick={() => setDevisOpen(true)} onCvClick={() => setCvOpen(true)} />
      <PresentationSection />
      <ServicesSection />
      <SectorsSection />
      <ProcessSection />
      <WhyUsSection />
      <QualitySection />
      <DualCtaSection onDevisClick={() => setDevisOpen(true)} onCvClick={() => setCvOpen(true)} />
      <FinalCtaSection onDevisClick={() => setDevisOpen(true)} />
      <Footer />
      <DevisModal open={devisOpen} onOpenChange={setDevisOpen} />
      <CvModal open={cvOpen} onOpenChange={setCvOpen} />
    </div>
  );
};

export default Index;
