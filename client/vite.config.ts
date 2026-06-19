// client/vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['images/PWA_FB_logo_main.png', 'images/PWA_FB_logo_mask.png'],

      manifest: {
        name: 'Radio Face B',
        short_name: 'Radio Face B',

        description: 'Web radio indépendante',

        theme_color: '#000000',
        background_color: '#000000',

        display: 'standalone',
        orientation: 'portrait',

        start_url: '/',
        scope: '/',

        lang: 'fr',

        icons: [
          {
            src: '/images/PWA_FB_logo_main.png',
            sizes: '512x512',
            type: 'image/png',
          },

          {
            src: '/images/PWA_FB_logo_mask.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
