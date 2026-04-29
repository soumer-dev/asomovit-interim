import { Button } from "@/components/ui/button";
import { Building, User } from "lucide-react";

interface DualCtaSectionProps {
  onDevisClick: () => void;
  onCvClick: () => void;
}

const DualCtaSection = ({ onDevisClick, onCvClick }: DualCtaSectionProps) => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Entreprise */}
        <div className="p-8 rounded-2xl border-2 border-primary/20 bg-background text-center">
          <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Building className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Vous êtes une entreprise</h3>
          <p className="mt-3 text-muted-foreground text-sm">
            Besoin de personnel qualifié rapidement ? Demandez un devis gratuit et sans engagement.
          </p>
          <Button onClick={onDevisClick} size="lg" className="mt-6">
            Demander un devis
          </Button>
        </div>

        {/* Candidat */}
        <div className="p-8 rounded-2xl border-2 border-accent/20 bg-background text-center">
          <div className="h-14 w-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <User className="h-7 w-7 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Vous êtes un candidat</h3>
          <p className="mt-3 text-muted-foreground text-sm">
            À la recherche d'une mission ? Déposez votre CV et laissez-nous trouver l'opportunité idéale.
          </p>
          <Button onClick={onCvClick} size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
            Déposer mon CV
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default DualCtaSection;
