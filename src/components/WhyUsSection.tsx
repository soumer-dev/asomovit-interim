import { Clock, ShieldCheck, Star, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Clock, text: "Gain de temps considérable" },
  { icon: ShieldCheck, text: "Réduction des contraintes administratives" },
  { icon: Star, text: "Profils qualifiés et vérifiés" },
  { icon: Zap, text: "Réactivité en moins de 48h" },
  { icon: HeartHandshake, text: "Accompagnement personnalisé" },
];

const WhyUsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground">Pourquoi choisir ASOMOVIT Intérim à Marrakech ?</h2>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((r) => (
          <div key={r.text} className="flex items-center gap-4 p-4 rounded-lg bg-background border">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <r.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="font-medium text-foreground">{r.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
