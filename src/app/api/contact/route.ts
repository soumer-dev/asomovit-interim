import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy-initialize so the constructor only runs at request time (not build time)
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

// ---------------------------------------------------------------------------
// reCAPTCHA v3 verification
// ---------------------------------------------------------------------------
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not set");
    return false;
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }).toString(),
  });

  const data = (await res.json()) as { success: boolean; score: number };
  // Require a score of at least 0.5 (0 = bot, 1 = human)
  return data.success && data.score >= 0.5;
}

// ---------------------------------------------------------------------------
// Parse recipients from env
// ---------------------------------------------------------------------------
function getRecipients(): string[] {
  const raw = process.env.RECIPIENT_EMAIL ?? "";
  return raw
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, string>;
    const { type, recaptchaToken, ...fields } = body;

    // --- reCAPTCHA validation ---
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Token reCAPTCHA manquant." },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Vérification reCAPTCHA échouée. Veuillez réessayer." },
        { status: 400 }
      );
    }

    // --- Recipients ---
    const recipients = getRecipients();
    if (recipients.length === 0) {
      console.error("No RECIPIENT_EMAIL configured");
      return NextResponse.json(
        { error: "Configuration serveur incorrecte." },
        { status: 500 }
      );
    }

    // --- Build email content based on form type ---
    let subject: string;
    let html: string;

    if (type === "cv") {
      subject = `[ASOMOVIT Intérim] Nouvelle candidature – ${fields.name ?? "Inconnu"}`;
      html = `
        <h2>Nouvelle candidature reçue</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Nom complet</strong></td><td>${escapeHtml(fields.name ?? "")}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${escapeHtml(fields.phone ?? "")}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(fields.email ?? "")}</td></tr>
          <tr><td><strong>Secteur recherché</strong></td><td>${escapeHtml(fields.sector ?? "")}</td></tr>
          <tr><td><strong>Expérience</strong></td><td style="white-space:pre-wrap">${escapeHtml(fields.experience ?? "")}</td></tr>
        </table>
      `;
    } else if (type === "devis") {
      subject = `[ASOMOVIT Intérim] Demande de devis – ${fields.company ?? "Inconnu"}`;
      html = `
        <h2>Nouvelle demande de devis</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Entreprise</strong></td><td>${escapeHtml(fields.company ?? "")}</td></tr>
          <tr><td><strong>Nom complet</strong></td><td>${escapeHtml(fields.name ?? "")}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(fields.email ?? "")}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${escapeHtml(fields.phone ?? "")}</td></tr>
          <tr><td><strong>Secteur d'activité</strong></td><td>${escapeHtml(fields.sector ?? "")}</td></tr>
          <tr><td><strong>Besoin</strong></td><td style="white-space:pre-wrap">${escapeHtml(fields.message ?? "")}</td></tr>
        </table>
      `;
    } else {
      return NextResponse.json({ error: "Type de formulaire invalide." }, { status: 400 });
    }

    // --- Send via Resend ---
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "ASOMOVIT Intérim <noreply@interim.asomovit.com>",
      to: recipients,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
