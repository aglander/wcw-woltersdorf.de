// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://wcw-woltersdorf.de',
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  integrations: [
    sitemap({
      // Rechtsseiten nicht in die Sitemap aufnehmen (passend zu robots.txt)
      filter: (page) =>
        !page.endsWith('/impressum/') && !page.endsWith('/datenschutz/'),
    }),
  ],
});
