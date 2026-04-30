"use client";

import { Hotel, Factory, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/motion";

const sectors = [
  { icon: Hotel, title: "Hôtellerie & Restauration", desc: "Serveurs, cuisiniers, femmes de chambre, réceptionnistes…" },
  { icon: Factory, title: "Industrie & BTP", desc: "Ouvriers qualifiés, manutentionnaires, techniciens…" },
  { icon: Sparkles, title: "Nettoyage & Services", desc: "Agents d'entretien, agents de sécurité, personnel polyvalent…" },
  { icon: Building2, title: "Bureaux & Entreprises", desc: "Assistants administratifs, hôtesses d'accueil, secrétaires…" },
];

const SectorsSection = () => (
  <section id="secteurs" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-2xl md:text-4xl font-bold text-center text-foreground"
      >
        Secteurs d&apos;activité à Marrakech
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ delay: 0.1 }}
        className="mt-4 text-center text-muted-foreground max-w-xl mx-auto"
      >
        Votre agence intérim intervient dans de nombreux secteurs à Marrakech et sa région
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {sectors.map((s) => (
          <motion.div
            key={s.title}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-6 rounded-xl border bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-center cursor-default"
          >
            <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors duration-300">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectorsSection;
