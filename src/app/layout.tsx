import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "@/components/Providers";
import { GTMScript, GTMNoScript } from "@/components/GoogleTagManager";
import "./globals.css";

// ─── Font ─────────────────────────────────────────────────────────────────────
// next/font/google self-hosts the font, eliminates the render-blocking
// Google Fonts @import, and adds font-display:swap automatically.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// ─── Env ──────────────────────────────────────────────────────────────────────
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a6e",
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Agence Intérim Marrakech – Recrutement Temporaire | ASOMOVIT Intérim",
  description:
    "ASOMOVIT Intérim, votre agence de recrutement intérim à Marrakech. Personnel temporaire qualifié en moins de 48h pour l'hôtellerie, l'industrie, le BTP et les services. Devis gratuit.",
  keywords: [
    "agence intérim Marrakech",
    "intérim Marrakech",
    "recrutement intérim Marrakech",
    "agence de recrutement Marrakech",
    "personnel temporaire Marrakech",
    "travail temporaire Maroc",
    "ASOMOVIT intérim",
    "intérimaires qualifiés Marrakech",
    "recrutement hôtellerie Marrakech",
    "personnel BTP Marrakech",
  ],
  authors: [{ name: "ASOMOVIT Intérim" }],
  creator: "ASOMOVIT Intérim",
  metadataBase: new URL("https://interim.asomovit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://interim.asomovit.com",
    title: "Agence Intérim Marrakech – Recrutement Temporaire | ASOMOVIT Intérim",
    description:
      "Votre agence intérim de confiance à Marrakech. Personnel qualifié en moins de 48h pour tous secteurs. Demandez un devis gratuit.",
    siteName: "ASOMOVIT Intérim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Intérim Marrakech | ASOMOVIT Intérim",
    description:
      "Recrutement temporaire à Marrakech – personnel qualifié en moins de 48h. Hôtellerie, industrie, BTP, services.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Google Tag Manager – loads GTM which can also fire GA4 events */}
        <link rel="preload" as="image" href="/_next/static/media/hero-bg-2.02928934.jpg" fetchPriority="high" />
        <GTMScript gtmId={GTM_ID} />

        {/* Direct GA4 integration (optional – use if not firing via GTM) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback – must be first element inside <body> */}
        <GTMNoScript gtmId={GTM_ID} />

        <Providers>
          <main id="main-content">
            {children}
          </main>
        </Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://interim.asomovit.com/#business",
              name: "ASOMOVIT Intérim",
              alternateName: "ASOMOVIT MULTISERVICES",
              description:
                "Agence intérim et recrutement temporaire à Marrakech, Maroc. Personnel qualifié en moins de 48h pour l'hôtellerie, l'industrie, le BTP et les services.",
              url: "https://interim.asomovit.com",
              logo: "https://interim.asomovit.com/favicon.svg",
              image: "https://interim.asomovit.com/favicon.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Allal El Fassi",
                addressLocality: "Marrakech",
                addressRegion: "Marrakech-Safi",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.6295,
                longitude: -7.9811,
              },
              telephone: "+212661622455",
              email: "direction@asomovitmultiservices.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/interim.asomovit/",
                "https://www.linkedin.com/company/asomovit-interim/",
              ],
              areaServed: {
                "@type": "City",
                name: "Marrakech",
              },
              serviceType: [
                "Travail temporaire",
                "Recrutement intérim",
                "Mise à disposition de personnel",
                "Recrutement hôtellerie Marrakech",
                "Personnel BTP Marrakech",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
