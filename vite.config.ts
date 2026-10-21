import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ROUTES = ['/', '/about', '/units', '/machinery', '/products', '/compliance', '/leadership', '/gallery', '/contact'];

/**
 * Fills __SITE_URL__ in index.html and emits robots.txt / sitemap.xml.
 * Set SITE_URL (e.g. https://www.example.com) when building for production;
 * without it, URLs stay relative and the sitemap is skipped.
 */
function seoPlugin() {
  const site = (process.env.SITE_URL ?? '').replace(/\/+$/, '');
  return {
    name: 'abedtex-seo',
    transformIndexHtml: (html: string) => html.replaceAll('__SITE_URL__', site),
    generateBundle(this: { emitFile: (f: { type: 'asset'; fileName: string; source: string }) => void }) {
      const robots = `User-agent: *\nAllow: /\n${site ? `Sitemap: ${site}/sitemap.xml\n` : ''}`;
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      if (!site) return;
      const urls = ROUTES.map((r) => `  <url><loc>${site}${r}</loc></url>`).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
  assetsInclude: ['**/*.JPG'],
  build: {
    // Modern baseline: smaller output, no legacy down-levelling (Chrome/Edge 90+,
    // Safari 14+, Firefox 88+ — everything that supports WebP anyway).
    target: 'es2020',
    cssCodeSplit: true,
    // Route chunks come from React.lazy (src/routes.ts); everything above the fold
    // stays in the entry chunk so the first paint has no extra round trip.
    reportCompressedSize: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0',
    allowedHosts: true as any,
  },
  preview: { host: '0.0.0.0', port: 4173, allowedHosts: true as any },
});
