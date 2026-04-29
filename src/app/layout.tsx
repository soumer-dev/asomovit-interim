import type { Metadata } from "next";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASOMOVIT Intérim – Travail Temporaire & Recrutement à Marrakech",
  description:
    "ASOMOVIT Intérim vous accompagne dans la gestion de vos ressources humaines temporaires. Trouvez du personnel qualifié en moins de 48h ou déposez votre CV pour décrocher une mission.",
  keywords: [
    "intérim Marrakech",
    "recrutement temporaire Maroc",
    "agence intérim",
    "travail temporaire",
    "ASOMOVIT",
    "personnel qualifié",
    "hôtellerie restauration",
    "industrie BTP",
  ],
  authors: [{ name: "ASOMOVIT Intérim" }],
  creator: "ASOMOVIT Intérim",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "ASOMOVIT Intérim – Travail Temporaire & Recrutement à Marrakech",
    description:
      "Votre partenaire de confiance en recrutement temporaire à Marrakech. Personnel qualifié en moins de 48h.",
    siteName: "ASOMOVIT Intérim",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOMOVIT Intérim – Travail Temporaire & Recrutement",
    description:
      "Votre partenaire de confiance en recrutement temporaire à Marrakech.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          {children}
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ASOMOVIT Intérim",
              description:
                "Agence de travail temporaire et recrutement à Marrakech, Maroc.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Allal El fassi",
                addressLocality: "Marrakech",
                addressCountry: "MA",
              },
              telephone: "+212661622455",
              email: "direction@asomovitmultiservices.com",
              url: "https://asomovitmultiservices.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
