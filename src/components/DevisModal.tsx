import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface DevisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DevisModal = ({ open, onOpenChange }: DevisModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Votre demande de devis a été envoyée avec succès !");
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Demander un devis gratuit</DialogTitle>
          <DialogDescription>Remplissez le formulaire et nous vous répondrons sous 24h.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise</Label>
              <Input id="company" placeholder="Nom de l'entreprise" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Votre nom" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@exemple.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" type="tel" placeholder="+212 6 XX XX XX XX" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sector">Secteur d'activité</Label>
            <Input id="sector" placeholder="Ex: Hôtellerie, Industrie…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre besoin</Label>
            <Textarea id="message" placeholder="Nombre de postes, durée, profils recherchés…" rows={3} required />
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
