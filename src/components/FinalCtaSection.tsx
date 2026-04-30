"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, viewport } from "@/lib/motion";

const MAP_LINK =
  "https://www.google.com/maps/place/ASOMOVIT+MULTISERVICES/data=!4m2!3m1!1s0x0:0x225b6db315207c08?sa=X&ved=1t:2428&ictx=111";

interface FinalCtaSectionProps {
  onDevisClick: () => void;
}

const FinalCtaSection = ({ onDevisClick }: FinalCtaSectionProps) => (
  <section id="contact" className="bg-gradient-to-r from-primary to-primary/80">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left — CTA */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground">
            Besoin de personnel temporaire rapidement ?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Contactez votre agence intérim à Marrakech et recevez une proposition sous 24h
          </p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={onDevisClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8 transition-shadow duration-200 hover:shadow-lg"
              >
                Demander un devis gratuit
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[hsl(320,70%,35%)] text-[hsl(320,70%,35%)] hover:bg-[hsl(320,70%,35%)]/10 gap-2 text-base px-8"
              >
                <a href="tel:+212661622455">
                  <Phone className="h-5 w-5" /> Appelez-nous
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — Map */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="ASOMOVIT Intérim – Allal El Fassi, Marrakech"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225b6db315207c08!2sASOMOVIT%20MULTISERVICES!5e0!3m2!1sfr!2sma!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-10 bg-white text-[hsl(220,60%,20%)] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md hover:bg-accent hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Voir ASOMOVIT Intérim sur Google Maps"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Voir sur Google Maps
          </a>
        </motion.div>

      </div>
    </div>
  </section>
);

export default FinalCtaSection;
