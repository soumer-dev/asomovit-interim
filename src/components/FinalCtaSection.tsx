"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225b6db315207c08!2sASOMOVIT%20MULTISERVICES!5e0!3m2!1sfr!2sma!4v1";

function LazyMap() {
  return (
    <iframe
      title="ASOMOVIT Intérim – Allal El Fassi, Marrakech"
      src={MAP_EMBED}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 w-full h-full"
    />
  );
}

interface FinalCtaSectionProps {
  onDevisClick: () => void;
}

const FinalCtaSection = ({ onDevisClick }: FinalCtaSectionProps) => (
  <section id="contact" className="bg-gradient-to-br from-primary via-primary to-primary/85">
    <div className="container mx-auto px-4 sm:px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left — CTA text */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Besoin de personnel temporaire rapidement ?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg leading-relaxed">
            Contactez votre agence intérim à Marrakech et recevez une proposition sous 24h
          </p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={onDevisClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                Demander un devis gratuit
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/40 text-blue hover:bg-white/10 gap-2 text-base px-8"
              >
                <a href="tel:+212661622455" aria-label="Appeler ASOMOVIT Intérim">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Appelez-nous
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — Map embed — lazy loaded on click to avoid 409 KiB at startup */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10"
        >
          <LazyMap />
        </motion.div>

      </div>
    </div>
  </section>
);

export default FinalCtaSection;
