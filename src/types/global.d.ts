// Extend the Window interface with GTM / GA4 globals
interface Window {
  dataLayer: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
}
