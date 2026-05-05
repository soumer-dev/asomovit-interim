"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useState, useEffect } from "react";

export default function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA only on first user interaction
    const trigger = () => setLoad(true);
    window.addEventListener("scroll", trigger, { once: true, passive: true });
    window.addEventListener("click", trigger, { once: true });
    window.addEventListener("keydown", trigger, { once: true });
    // Fallback: load after 5s idle regardless
    const timer = setTimeout(trigger, 5000);
    return () => {
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("click", trigger);
      window.removeEventListener("keydown", trigger);
      clearTimeout(timer);
    };
  }, []);

  if (!siteKey || !load) return <>{children}</>;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{ async: true, defer: true, appendTo: "body" }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}