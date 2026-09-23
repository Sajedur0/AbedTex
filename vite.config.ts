import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
