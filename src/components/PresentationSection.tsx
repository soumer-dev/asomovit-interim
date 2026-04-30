"use client";

import { Users, ClipboardCheck, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, scaleIn, viewport } from "@/lib/motion";

const points = [
  { icon: Users, title: "Sélection rigoureuse", desc: "Nous identifions les meilleurs profils selon vos critères spécifiques." },
  { icon: ClipboardCheck, title: "Évaluation des compétences", desc: "Tests et entretiens pour garantir la qualité de chaque candidat." },
  { icon: RefreshCw, title: "Adaptation rapide", desc: "Flexibilité totale pour répondre à vos besoins urgents ou ponctuels." },
];

const PresentationSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-2xl md:text-4xl font-bold text-foreground"
      >
        Votre agence intérim de confiance à Marrakech
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ delay: 0.1 }}
        className="mt-4 text-muted-foreground max-w-2xl mx-auto"
      >
        ASOMOVIT Intérim vous accompagne dans la gestion de vos ressources humaines temporaires à Marrakech avec professionnalisme et réactivité.
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid md:grid-cols-3 gap-8"
      >
        {points.map((p) => (
          <motion.div
            key={p.title}
            variants={staggerItem}
            className="flex flex-col items-center gap-4 p-6"
          >
            <motion.div
              variants={scaleIn}
              className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <p.icon className="h-7 w-7 text-primary" />
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PresentationSection;
