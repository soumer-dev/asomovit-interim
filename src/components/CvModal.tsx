"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Loader2 } from "lucide-react";

interface CvModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CvModal = ({ open, onOpenChange }: CvModalProps) => {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Capture form ref immediately — e.currentTarget becomes null after any await
    const form = e.currentTarget;
    setLoading(true);

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("cv_form");
      }

      const data = new FormData(form);

      const payload = {
        type: "cv",
        recaptchaToken,
        name: data.get("name") as string,
        phone: data.get("phone") as string,
        email: data.get("email") as string,
        sector: data.get("sector") as string,
        experience: data.get("experience") as string,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Erreur inconnue");
      }

      toast.success("Votre candidature a été envoyée avec succès !");
      form.reset();
      onOpenChange(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Déposer mon CV</DialogTitle>
          <DialogDescription>
            Envoyez-nous votre candidature et nous vous recontacterons rapidement.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cv-name">Nom complet</Label>
              <Input
                id="cv-name"
                name="name"
                placeholder="Votre nom"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cv-phone">Téléphone</Label>
              <Input
                id="cv-phone"
                name="phone"
                type="tel"
                placeholder="+212 6 XX XX XX XX"
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="cv-email">Email</Label>
            <Input
              id="cv-email"
              name="email"
              type="email"
              placeholder="email@exemple.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="cv-sector">Secteur recherché</Label>
            <Input
              id="cv-sector"
              name="sector"
              placeholder="Ex: Hôtellerie, Nettoyage…"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="cv-exp">Expérience</Label>
            <Textarea
              id="cv-exp"
              name="experience"
              placeholder="Décrivez brièvement votre expérience…"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Envoi en cours…
              </>
            ) : (
              "Envoyer ma candidature"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CvModal;
