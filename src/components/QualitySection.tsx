import { Award, CheckCircle, TrendingUp } from "lucide-react";

const badges = [
  { icon: Award, title: "Conformité légale", desc: "Respect total du code du travail marocain" },
  { icon: CheckCircle, title: "Suivi continu", desc: "Évaluation régulière de la satisfaction client" },
  { icon: TrendingUp, title: "Amélioration continue", desc: "Processus optimisés pour une qualité constante" },
];

const QualitySection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground">Notre engagement qualité</h2>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualitySection;
