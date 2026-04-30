import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="contact" className="py-12 bg-white text-[hsl(220,60%,20%)]">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Image src={logo} alt="ASOMOVIT Intérim" className="h-32 w-auto mb-4" height={128} />
          <p className="text-sm text-[hsl(220,60%,20%)]/70">
            Votre partenaire de confiance en recrutement temporaire à Marrakech.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-[hsl(220,60%,20%)]/70">
            <li><a href="#accueil" className="hover:text-[hsl(220,60%,20%)] transition-colors">Accueil</a></li>
            <li><a href="#services" className="hover:text-[hsl(220,60%,20%)] transition-colors">Nos services</a></li>
            <li><a href="#secteurs" className="hover:text-[hsl(220,60%,20%)] transition-colors">Secteurs d&apos;activité</a></li>
            <li><a href="#process" className="hover:text-[hsl(220,60%,20%)] transition-colors">Comment ça marche</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[hsl(220,60%,20%)]/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent" /> Allal El fassi, Marrakech, Maroc
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" /> +212 6 61 62 24 55
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent" /> direction@asomovitmultiservices.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[hsl(220,60%,20%)]/20 text-center text-sm text-[hsl(220,60%,20%)]/50">
        <p>
            © {new Date().getFullYear()} ASOMOVIT MULTISERVICES, appuyé par{" "}
            <a
              href="https://monarkit.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[hsl(220,60%,20%)]/50 transition-colors"
            >
              MONARK IT
            </a>
            . Tous droits réservés.
          </p>
      </div>
    </div>
  </footer>
);

export default Footer;
