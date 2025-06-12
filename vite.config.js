import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.gif'],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});