"use client";

import { Button } from "@/components/ui/button";
import { Building, User } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn, viewport } from "@/lib/motion";interface DualCtaSectionProps {
  onDevisClick: () => void;
  onCvClick: () => void;
}

const DualCtaSection = ({ onDevisClick, onCvClick }: DualCtaSectionProps) => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Entreprise */}
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, transition: { duration: 0.22 } }}
          className="p-8 rounded-2xl border-2 border-primary/20 bg-background text-center"
        >
          <motion.div variants={scaleIn} className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Building className="h-7 w-7 text-primary" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground">Vous êtes une entreprise</h3>
          <p className="mt-3 text-muted-foreground text-sm">
            Besoin de personnel qualifié rapidement ? Demandez un devis gratuit et sans engagement.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-6">
            <Button onClick={onDevisClick} size="lg" className="transition-shadow duration-200 hover:shadow-md">
              Demander un devis
            </Button>
          </motion.div>
        </motion.div>

        {/* Candidat */}
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -4, transition: { duration: 0.22 } }}
          className="p-8 rounded-2xl border-2 border-accent/20 bg-background text-center"
        >
          <motion.div variants={scaleIn} className="h-14 w-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <User className="h-7 w-7 text-accent" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground">Vous êtes un candidat</h3>
          <p className="mt-3 text-muted-foreground text-sm">
            À la recherche d&apos;une mission ? Déposez votre CV et laissez-nous trouver l&apos;opportunité idéale.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-6">
            <Button onClick={onCvClick} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-shadow duration-200 hover:shadow-md">
              Déposer mon CV
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default DualCtaSection;
