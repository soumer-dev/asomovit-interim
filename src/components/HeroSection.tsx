import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg-2.jpg";

interface HeroSectionProps {
  onDevisClick: () => void;
  onCvClick: () => void;
}

const HeroSection = ({ onDevisClick, onCvClick }: HeroSectionProps) => (
  <section id="accueil" className="relative pt-24 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-primary/70" />
    <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4 py-20 md:py-32">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl animate-fade-in-up">
        Travail Temporaire & Recrutement
      </h1>
      <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl animate-fade-in-up animation-delay-200">
        Trouvez du personnel fiable en moins de 48h ou décrochez une mission adaptée à votre profil
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
        <Button size="lg" onClick={onDevisClick} className="gap-2 text-base px-8">
          <ArrowRight className="h-5 w-5" /> Demander un devis
        </Button>
        <Button size="lg" onClick={onCvClick} className="gap-2 text-base px-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <FileText className="h-5 w-5" /> Déposer mon CV
        </Button>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/80">
        <span className="flex items-center gap-2">{"\n"}</span>
        <span className="flex items-center gap-2">{"\n"}</span>
        <span className="flex items-center gap-2">{"\n"}</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
