import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nxViteTsPaths()],
  build: {
    outDir: 'dist/react-app',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@orders': path.resolve(__dirname, './modules/orders/src/index.ts'),
      '@products': path.resolve(__dirname, './modules/products/src/index.ts'),
      '@ui': path.resolve(__dirname, './modules/ui/src/index.ts'),
    },
  },
});
