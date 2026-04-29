"use client";

import { ClipboardList, UserCheck, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  { icon: ClipboardList, num: "1", title: "Analyse du besoin", desc: "Nous étudions vos exigences en termes de compétences, effectifs et délais." },
  { icon: UserCheck, num: "2", title: "Sélection des candidats", desc: "Nous présélectionnons les profils les plus adaptés dans notre vivier de talents." },
  { icon: Rocket, num: "3", title: "Mise à disposition rapide", desc: "Le candidat intègre votre équipe en moins de 48h, prêt à travailler." },
];

const ProcessSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl md:text-4xl font-bold text-center text-foreground transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Comment ça marche ?
        </h2>
        <p
          className={`mt-4 text-center text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Un processus simple et rapide en 3 étapes
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${400 + i * 250}ms` : "0ms" }}
            >
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4">
                {s.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}
              <s.icon className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
