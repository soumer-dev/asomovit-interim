"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg-2.jpg";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onDevisClick: () => void;
  onCvClick: () => void;
}

const HeroSection = ({ onDevisClick, onCvClick }: HeroSectionProps) => (
  <section id="accueil" className="relative pt-24 overflow-hidden" aria-label="Accueil">
    {/* Background — subtle Ken Burns zoom */}
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.06 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <Image
        src={heroBg}
        alt="Agence intérim Marrakech – ASOMOVIT Intérim, recrutement temporaire au Maroc"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
    </motion.div>

    {/* Overlay */}
    <motion.div
      className="absolute inset-0 bg-primary/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      aria-hidden="true"
    />

    <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-24 md:py-36">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        Agence Intérim à Marrakech – Recrutement Temporaire Rapide
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Trouvez du personnel qualifié en moins de 48h ou décrochez une mission adaptée à votre profil à Marrakech et sa région
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button
            size="lg"
            onClick={onDevisClick}
            className="gap-2 text-base px-8 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            Demander un devis
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button
            size="lg"
            onClick={onCvClick}
            className="gap-2 text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            Déposer mon CV
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
