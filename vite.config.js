import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: '/src/assets/',
      app: '/src/app/',
      services: '/src/services/',
      utils: '/src/utils/',
      store: '/src/store/',
      modules: '/src/modules/'
    }
  }
});
