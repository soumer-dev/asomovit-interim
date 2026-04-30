"use client";

import Script from "next/script";

interface GoogleTagManagerProps {
  gtmId: string;
}

/**
 * Injects the GTM <script> tag in <head> and the <noscript> iframe in <body>.
 * The noscript fallback is rendered as a React portal-like element; place
 * <GTMNoScript> right after <body> opens in layout.tsx.
 */
export function GTMScript({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) return null;
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

export function GTMNoScript({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="GTM noscript"
      />
    </noscript>
  );
}
