"use client";
import { useEffect } from "react";

interface GoogleTagManagerProps { gtmId: string; }

export function GTMScript({ gtmId }: GoogleTagManagerProps) {
  useEffect(() => {
    if (!gtmId) return;
    let loaded = false;
    function load() {
      if (loaded) return;
      loaded = true;
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(s);
    }
    const t = setTimeout(load, 4000);
    window.addEventListener("scroll", load, { once: true, passive: true });
    window.addEventListener("click", load, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", load);
      window.removeEventListener("click", load);
    };
  }, [gtmId]);
  return null;
}

export function GTMNoScript({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="GTM noscript" />
    </noscript>
  );
}