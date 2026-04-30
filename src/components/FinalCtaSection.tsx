import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface FinalCtaSectionProps {
  onDevisClick: () => void;
}

const FinalCtaSection = ({ onDevisClick }: FinalCtaSectionProps) => (
  <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground">Besoin de personnel temporaire rapidement ?</h2>
      <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
        Contactez votre agence intérim à Marrakech et recevez une proposition sous 24h
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={onDevisClick} className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8">
          Demander un devis gratuit
        </Button>
        <Button size="lg" variant="outline" asChild className="border-[hsl(320,70%,35%)] text-[hsl(320,70%,35%)] hover:bg-[hsl(320,70%,35%)]/10 gap-2 text-base px-8">
          <a href="tel:+212661622455">
            <Phone className="h-5 w-5" /> Appelez-nous
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FinalCtaSection;
