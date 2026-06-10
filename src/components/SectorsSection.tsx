"use client";

import { Hotel, Factory, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "@/lib/motion";

const sectors = [
  {
    icon: Hotel,
    title: "Hôtellerie & Restauration",
    desc: "Serveurs, cuisiniers, femmes de chambre, réceptionnistes…",
    image: "/Hotel.webp",
  },
  {
    icon: Factory,
    title: "Industrie & BTP",
    desc: "Ouvriers qualifiés, manutentionnaires, techniciens…",
    image: "/Factory.webp",
  },
  {
    icon: Sparkles,
    title: "Nettoyage & Services",
    desc: "Agents d'entretien, agents de sécurité, personnel polyvalent…",
    image: "/Nettoyage.webp",
  },
  {
    icon: Building2,
    title: "Bureaux & Entreprises",
    desc: "Assistants administratifs, hôtesses d'accueil, secrétaires…",
    image: "/Bureaux.webp",
  },
];

const SectorsSection = () => (
  <section id="secteurs" className="py-24 bg-card">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-2xl md:text-4xl font-bold text-foreground"
        >
          Secteurs d&apos;activité à Marrakech
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-muted-foreground"
        >
          Votre agence intérim intervient dans de nombreux secteurs à Marrakech et sa région
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {sectors.map((s) => (
          <motion.div
            key={s.title}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-2xl border border-border/60 overflow-hidden text-center cursor-default"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${s.image}')` }}
            />

            {/* Blue overlay at 20% — strengthens to 60% on hover */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-[#2c498c]/80 transition-colors duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <div className="h-14 w-14 mx-auto rounded-full bg-white/20 group-hover:bg-white/25 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="h-7 w-7 text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-base text-white drop-shadow transition-colors duration-300">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed drop-shadow">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectorsSection;