"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Zap, Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, scaleIn, viewport } from "@/lib/motion";

const services = [
  {
    icon: UserPlus,
    title: "Mise à disposition de personnel",
    desc: "Nous mettons à votre disposition des intérimaires qualifiés, prêts à intégrer vos équipes rapidement.",
  },
  {
    icon: Zap,
    title: "Recrutement rapide et flexible",
    desc: "Besoin urgent ? Nous trouvons le profil idéal en moins de 48 heures pour vos missions temporaires.",
  },
  {
    icon: Search,
    title: "Sélection et évaluation des profils",
    desc: "Chaque candidat est évalué selon des critères stricts : compétences, expérience, motivation.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center max-w-xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-2xl md:text-4xl font-bold text-foreground"
        >
          Nos Services d&apos;Intérim à Marrakech
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-muted-foreground"
        >
          Des solutions de recrutement temporaire adaptées à chaque besoin à Marrakech et sa région
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-14 grid md:grid-cols-3 gap-6"
      >
        {services.map((s) => (
          <motion.div key={s.title} variants={staggerItem} className="h-full">
            <Card className="h-full border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <CardHeader className="items-center pt-8 pb-4">
                <motion.div
                  variants={scaleIn}
                  className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-accent/20"
                >
                  <s.icon className="h-6 w-6 text-accent" />
                </motion.div>
                <CardTitle className="text-base font-semibold text-center leading-snug">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
