"use client";

import { ClipboardList, UserCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, scaleIn, viewport } from "@/lib/motion";

const steps = [
  { icon: ClipboardList, num: "1", title: "Analyse du besoin", desc: "Nous étudions vos exigences en termes de compétences, effectifs et délais." },
  { icon: UserCheck, num: "2", title: "Sélection des candidats", desc: "Nous présélectionnons les profils les plus adaptés dans notre vivier de talents." },
  { icon: Rocket, num: "3", title: "Mise à disposition rapide", desc: "Le candidat intègre votre équipe en moins de 48h, prêt à travailler." },
];

const ProcessSection = () => (
  <section id="process" className="py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-2xl md:text-4xl font-bold text-center text-foreground"
      >
        Comment ça marche ?
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ delay: 0.1 }}
        className="mt-4 text-center text-muted-foreground max-w-xl mx-auto"
      >
        Un processus simple et rapide en 3 étapes
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid md:grid-cols-3 gap-8"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            variants={staggerItem}
            className="relative flex flex-col items-center text-center"
          >
            <motion.div
              variants={scaleIn}
              className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4"
            >
              {s.num}
            </motion.div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
            )}
            <s.icon className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
