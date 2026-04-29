import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Zap, Search } from "lucide-react";

const services = [
  { icon: UserPlus, title: "Mise à disposition de personnel", desc: "Nous mettons à votre disposition des intérimaires qualifiés, prêts à intégrer vos équipes rapidement." },
  { icon: Zap, title: "Recrutement rapide et flexible", desc: "Besoin urgent ? Nous trouvons le profil idéal en moins de 48 heures pour vos missions temporaires." },
  { icon: Search, title: "Sélection et évaluation des profils", desc: "Chaque candidat est évalué selon des critères stricts : compétences, expérience, motivation." },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground">Nos Services</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Des solutions de recrutement temporaire adaptées à chaque besoin
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="hover:shadow-lg transition-shadow border-border/50 hover:-translate-y-1 transition-transform duration-300">
            <CardHeader className="items-center">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-lg text-center">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
