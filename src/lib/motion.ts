/**
 * Shared Framer Motion variants and helpers.
 * All animations respect `prefers-reduced-motion` via the `useReducedMotion`
 * hook — when the user has that preference set, every variant resolves to a
 * no-op so the page is still fully functional.
 */

import type { Variants } from "framer-motion";

// ─── Reusable variants ────────────────────────────────────────────────────────

/** Fade + slide up — used for headings, paragraphs, section intros */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in only — used for images, overlays */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Stagger container — wraps a list of children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Card / item variant used inside stagger containers */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide in from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide in from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Scale up — used for icon circles, badges */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Viewport config ─────────────────────────────────────────────────────────

/** Standard whileInView viewport — triggers once, 15 % visible */
export const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;
