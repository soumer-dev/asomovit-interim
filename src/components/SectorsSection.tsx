import { Hotel, Factory, Sparkles, Building2 } from "lucide-react";

const sectors = [
  { icon: Hotel, title: "Hôtellerie & Restauration", desc: "Serveurs, cuisiniers, femmes de chambre, réceptionnistes…" },
  { icon: Factory, title: "Industrie & BTP", desc: "Ouvriers qualifiés, manutentionnaires, techniciens…" },
  { icon: Sparkles, title: "Nettoyage & Services", desc: "Agents d'entretien, agents de sécurité, personnel polyvalent…" },
  { icon: Building2, title: "Bureaux & Entreprises", desc: "Assistants administratifs, hôtesses d'accueil, secrétaires…" },
];

const SectorsSection = () => (
  <section id="secteurs" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground">Secteurs d&apos;activité à Marrakech</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
        Votre agence intérim intervient dans de nombreux secteurs à Marrakech et sa région
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((s) => (
          <div key={s.title} className="group p-6 rounded-xl border bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/80">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
