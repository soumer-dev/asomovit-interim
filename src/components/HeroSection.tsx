"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg-2.jpg";

interface HeroSectionProps {
  onDevisClick: () => void;
  onCvClick: () => void;
}

const HeroSection = ({ onDevisClick, onCvClick }: HeroSectionProps) => (
  <section id="accueil" className="relative pt-24 overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src={heroBg}
        alt="Agence intérim Marrakech – ASOMOVIT Intérim, recrutement temporaire au Maroc"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
    <div className="absolute inset-0 bg-primary/70" />
    <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4 py-20 md:py-32">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl animate-fade-in-up">
        Agence Intérim à Marrakech – Recrutement Temporaire Rapide
      </h1>
      <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl animate-fade-in-up animation-delay-200">
        Trouvez du personnel qualifié en moins de 48h ou décrochez une mission adaptée à votre profil à Marrakech et sa région
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
        <Button size="lg" onClick={onDevisClick} className="gap-2 text-base px-8">
          <ArrowRight className="h-5 w-5" /> Demander un devis
        </Button>
        <Button size="lg" onClick={onCvClick} className="gap-2 text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <FileText className="h-5 w-5" /> Déposer mon CV
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
