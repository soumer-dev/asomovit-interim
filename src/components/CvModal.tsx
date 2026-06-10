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

const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function validateFile(file: File | null | undefined): string | null {
  if (!file) return null;
  const ext = file.name.toLowerCase().slice(file.name.lastIndexOf("."));
  if (!ACCEPTED_MIME_TYPES.includes(file.type) && !ACCEPTED_EXTENSIONS.includes(ext)) {
    return "Format non accepté. Veuillez utiliser un fichier PDF, DOC ou DOCX.";
  }
  if (file.size > MAX_FILE_SIZE) {
    return "Le fichier dépasse la taille maximale de 5 Mo.";
  }
  return null;
}

const CvModal = ({ open, onOpenChange }: CvModalProps) => {
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleOpenChange = (val: boolean) => {
    if (!val) setFileError(null);
    onOpenChange(val);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(validateFile(e.target.files?.[0]));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const fileInput = form.elements.namedItem("cv_file") as HTMLInputElement;
    const file = fileInput?.files?.[0];
    const err = validateFile(file);
    if (err) {
      setFileError(err);
      return;
    }

    setLoading(true);

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("cv_form");
      }

      const formData = new FormData(form);
      formData.set("type", "cv");
      formData.set("recaptchaToken", recaptchaToken);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        // No Content-Type header — browser sets it automatically with the multipart boundary
      });

      const json = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Erreur inconnue");
      }

      toast.success("Votre candidature a été envoyée avec succès !");
      form.reset();
      setFileError(null);
      onOpenChange(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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

          <div className="space-y-1.5">
            <Label htmlFor="cv-file">
              Pièce jointe{" "}
              <span className="text-muted-foreground font-normal text-xs">
                (PDF, DOC, DOCX – max 5 Mo)
              </span>
            </Label>
            <Input
              id="cv-file"
              name="cv_file"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="cursor-pointer file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-accent file:text-accent-foreground hover:file:bg-accent/90"
            />
            {fileError && (
              <p className="text-destructive text-xs" role="alert">
                {fileError}
              </p>
            )}
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
