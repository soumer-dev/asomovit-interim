"use client";

import { Award, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, scaleIn, viewport } from "@/lib/motion";

const badges = [
  {
    icon: Award,
    title: "Conformité légale",
    desc: "Respect total du code du travail marocain",
  },
  {
    icon: CheckCircle,
    title: "Suivi continu",
    desc: "Évaluation régulière de la satisfaction client",
  },
  {
    icon: TrendingUp,
    title: "Amélioration continue",
    desc: "Processus optimisés pour une qualité constante",
  },
];

const QualitySection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-2xl md:text-4xl font-bold text-foreground"
      >
        Notre engagement qualité
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-14 grid md:grid-cols-3 gap-8"
      >
        {badges.map((b) => (
          <motion.div
            key={b.title}
            variants={staggerItem}
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border/60"
          >
            <motion.div
              variants={scaleIn}
              className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center"
              aria-hidden="true"
            >
              <b.icon className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="font-semibold text-base text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default QualitySection;
