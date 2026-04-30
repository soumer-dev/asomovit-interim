"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import RecaptchaProvider from "@/components/RecaptchaProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecaptchaProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </RecaptchaProvider>
  );
}
