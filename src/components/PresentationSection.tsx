import { Users, ClipboardCheck, RefreshCw } from "lucide-react";

const points = [
  { icon: Users, title: "Sélection rigoureuse", desc: "Nous identifions les meilleurs profils selon vos critères spécifiques." },
  { icon: ClipboardCheck, title: "Évaluation des compétences", desc: "Tests et entretiens pour garantir la qualité de chaque candidat." },
  { icon: RefreshCw, title: "Adaptation rapide", desc: "Flexibilité totale pour répondre à vos besoins urgents ou ponctuels." },
];

const PresentationSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground">Votre partenaire en recrutement temporaire</h2>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        ASOMOVIT Intérim vous accompagne dans la gestion de vos ressources humaines temporaires avec professionnalisme et réactivité.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {points.map((p) => (
          <div key={p.title} className="flex flex-col items-center gap-4 p-6">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
              <p.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PresentationSection;
