import { lazy, type ComponentType } from 'react';

type PageModule = { default: ComponentType };

/**
 * Route level code splitting.
 *
 * The home page (and the shell around it) ships in the entry bundle so the hero
 * renders immediately; every other page becomes its own small chunk that is
 * fetched on demand — and pre-warmed on nav hover / right after first paint.
 */
const routes: Record<string, () => Promise<unknown>> = {
  '/about': () => import('./pages/AboutPage'),
  '/units': () => import('./pages/UnitsPage'),
  '/machinery': () => import('./pages/MachineryPage'),
  '/products': () => import('./pages/ProductsPage'),
  '/compliance': () => import('./pages/CompliancePage'),
  '/leadership': () => import('./pages/LeadershipPage'),
  '/gallery': () => import('./pages/GalleryPage'),
  '/contact': () => import('./pages/ContactPage'),
};

const page = (path: string) => lazy(routes[path] as () => Promise<PageModule>);

export const AboutPage = page('/about');
export const UnitsPage = page('/units');
export const MachineryPage = page('/machinery');
export const ProductsPage = page('/products');
export const CompliancePage = page('/compliance');
export const LeadershipPage = page('/leadership');
export const GalleryPage = page('/gallery');
export const ContactPage = page('/contact');

/** Warms up a single route chunk (used on hover / touch of a nav link). */
export function prefetchRoute(path: string) {
  routes[path]?.();
}

/** Warms up the chunks a visitor is most likely to open next, without blocking. */
export function prefetchLikelyRoutes() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (connection?.saveData || /(^|-)(2g|slow-2g)$/.test(connection?.effectiveType ?? '')) return;

  const warm = () => ['/about', '/units', '/gallery', '/contact'].forEach(prefetchRoute);
  const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
    .requestIdleCallback;
  if (idle) idle(warm, { timeout: 3000 });
  else window.setTimeout(warm, 1200);
}
