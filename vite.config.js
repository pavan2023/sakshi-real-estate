import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about_us.html'),
        services: resolve(__dirname, 'services.html'),
        property_details: resolve(__dirname, 'property_details.html'),
        property_listings: resolve(__dirname, 'property_listings.html')
      }
    }
  }
});
