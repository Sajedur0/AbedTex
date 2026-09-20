import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    port: 3000,
    open: false,
    host: '0.0.0.0',
    allowedHosts: true as any,
    hmr: { host: 'localhost' },
    headers: { 'X-Frame-Options': 'ALLOWALL' }
  },
  preview: { host: '0.0.0.0' }
});
