import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onDevisClick: () => void;
}

const Navbar = ({ onDevisClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Secteurs", href: "#secteurs" },
    { label: "Comment ça marche", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <a href="#accueil" className="flex items-center gap-2">
          <img src={logo} alt="ASOMOVIT Intérim" className="h-20 w-auto object-scale-down bg-transparent" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button onClick={onDevisClick} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Demander un devis
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button onClick={() => { onDevisClick(); setMobileOpen(false); }} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Demander un devis
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
