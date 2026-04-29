import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <p className="mt-4 text-xl font-semibold">Page introuvable</p>
      <p className="mt-2 text-muted-foreground text-center max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
