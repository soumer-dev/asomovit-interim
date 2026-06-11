"use client";

import Image from "next/image";
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
          <motion.figure
            key={s.title}
            variants={staggerItem}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl shadow-md cursor-default"
          >
            {/* Image */}
            <Image
              src={s.image}
              alt={s.title}
              width={600}
              height={256}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Caption — gradient from primary, always visible */}
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-4 text-white">

              <p className="font-semibold text-base leading-snug">{s.title}</p>

              {/* Desc — slides in on hover */}
              <p className="mt-1 text-xs text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 leading-relaxed overflow-hidden">
                {s.desc}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectorsSection;