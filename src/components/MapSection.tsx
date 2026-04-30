/**
 * Google Maps embed + clickable "Voir sur Google Maps" link.
 * Placed in the footer area / contact section.
 */
const MAP_LINK =
  "https://www.google.com/maps/place/ASOMOVIT+MULTISERVICES/data=!4m2!3m1!1s0x0:0x225b6db315207c08?sa=X&ved=1t:2428&ictx=111";

export default function MapSection() {
  return (
    <section
      id="localisation"
      aria-label="Notre localisation à Marrakech"
      className="w-full"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <iframe
          title="ASOMOVIT Intérim – Allal El Fassi, Marrakech"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225b6db315207c08!2sASOMOVIT%20MULTISERVICES!5e0!3m2!1sfr!2sma!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
        {/* Overlay link */}
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 bg-white text-[hsl(220,60%,20%)] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md hover:bg-accent hover:text-white transition-colors flex items-center gap-1.5"
          aria-label="Voir ASOMOVIT Intérim sur Google Maps"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Voir sur Google Maps
        </a>
      </div>
    </section>
  );
}
