"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface CvModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CvModal = ({ open, onOpenChange }: CvModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Votre candidature a été envoyée avec succès !");
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Déposer mon CV</DialogTitle>
          <DialogDescription>Envoyez-nous votre candidature et nous vous recontacterons rapidement.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cv-name">Nom complet</Label>
              <Input id="cv-name" placeholder="Votre nom" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cv-phone">Téléphone</Label>
              <Input id="cv-phone" type="tel" placeholder="+212 6 XX XX XX XX" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cv-email">Email</Label>
            <Input id="cv-email" type="email" placeholder="email@exemple.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cv-sector">Secteur recherché</Label>
            <Input id="cv-sector" placeholder="Ex: Hôtellerie, Nettoyage…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cv-exp">Expérience</Label>
            <Textarea id="cv-exp" placeholder="Décrivez brièvement votre expérience…" rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cv-file">Votre CV (PDF)</Label>
            <Input id="cv-file" type="file" accept=".pdf,.doc,.docx" />
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={loading}>
            {loading ? "Envoi en cours…" : "Envoyer ma candidature"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CvModal;
