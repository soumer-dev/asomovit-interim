import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const MAP_LINK =
  "https://www.google.com/maps/place/ASOMOVIT+MULTISERVICES/data=!4m2!3m1!1s0x0:0x225b6db315207c08?sa=X&ved=1t:2428&ictx=111";

const Footer = () => (
  <footer id="contact" className="py-12 bg-white text-[hsl(220,60%,20%)]">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Image
            src={logo}
            alt="ASOMOVIT Intérim – Agence de recrutement temporaire à Marrakech"
            className="h-32 w-auto mb-4"
            height={128}
          />
          <p className="text-sm text-[hsl(220,60%,20%)]/70">
            Votre partenaire de confiance en recrutement temporaire à Marrakech.
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/interim.asomovit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ASOMOVIT Intérim sur Instagram"
              className="h-9 w-9 rounded-full bg-[hsl(220,60%,20%)]/10 flex items-center justify-center text-[hsl(220,60%,20%)]/60 hover:bg-[hsl(320,70%,45%)] hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/asomovit-interim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ASOMOVIT Intérim sur LinkedIn"
              className="h-9 w-9 rounded-full bg-[hsl(220,60%,20%)]/10 flex items-center justify-center text-[hsl(220,60%,20%)]/60 hover:bg-[hsl(210,90%,40%)] hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=61583957429265"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter ASOMOVIT Intérim sur Facebook"
              className="h-9 w-9 rounded-full bg-[hsl(220,60%,20%)]/10 flex items-center justify-center text-[hsl(220,60%,20%)]/60 hover:bg-[hsl(142,70%,40%)] hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-[hsl(220,60%,20%)]/70">
            <li>
              <a href="#accueil" className="hover:text-[hsl(220,60%,20%)] transition-colors">
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[hsl(220,60%,20%)] transition-colors">
                Nos services
              </a>
            </li>
            <li>
              <a href="#secteurs" className="hover:text-[hsl(220,60%,20%)] transition-colors">
                Secteurs d&apos;activité
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-[hsl(220,60%,20%)] transition-colors">
                Comment ça marche
              </a>
            </li>
            <li>
              <a href="#localisation" className="hover:text-[hsl(220,60%,20%)] transition-colors">
                Notre localisation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[hsl(220,60%,20%)]/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-accent mt-0.5" />
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(220,60%,20%)] transition-colors"
                aria-label="Voir notre adresse sur Google Maps"
              >
                Allal El Fassi, Marrakech, Maroc
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
              <a
                href="tel:+212661622455"
                className="hover:text-[hsl(220,60%,20%)] transition-colors"
                aria-label="Appeler ASOMOVIT Intérim"
              >
                +212 6 61 62 24 55
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
              <a
                href="mailto:direction@asomovitmultiservices.com"
                className="hover:text-[hsl(220,60%,20%)] transition-colors break-all"
                aria-label="Envoyer un email à ASOMOVIT Intérim"
              >
                direction@asomovitmultiservices.com
              </a>
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
