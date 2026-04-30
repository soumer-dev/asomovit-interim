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

interface DevisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DevisModal = ({ open, onOpenChange }: DevisModalProps) => {
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // --- reCAPTCHA v3 token ---
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("devis_form");
      }

      const form = e.currentTarget;
      const data = new FormData(form);

      const payload = {
        type: "devis",
        recaptchaToken,
        company: data.get("company") as string,
        name: data.get("name") as string,
        email: data.get("email") as string,
        phone: data.get("phone") as string,
        sector: data.get("sector") as string,
        message: data.get("message") as string,
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

      toast.success("Votre demande de devis a été envoyée avec succès !");
      form.reset();
      onOpenChange(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Une erreur est survenue.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Demander un devis gratuit</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire et nous vous répondrons sous 24h.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise</Label>
              <Input
                id="company"
                name="company"
                placeholder="Nom de l'entreprise"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" name="name" placeholder="Votre nom" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@exemple.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+212 6 XX XX XX XX"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sector">Secteur d&apos;activité</Label>
            <Input
              id="sector"
              name="sector"
              placeholder="Ex: Hôtellerie, Industrie…"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre besoin</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Nombre de postes, durée, profils recherchés…"
              rows={3}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Envoi en cours…" : "Envoyer ma demande"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DevisModal;
