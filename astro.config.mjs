import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Production domain — used for canonical URLs, og:url and sitemap.
// TODO: replace with the final portfolio domain once decided.
export default defineConfig({
  site: 'https://ademkocyigit.com',

  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: path.resolve(__dirname, 'tailwind.config.mjs'),
    }),
  ],

  // Static output — deploys to Cloudflare Pages / Netlify / GitHub Pages as-is.
  // (No SSR adapter needed for a portfolio; can be added later if required.)
  server: { port: 4323 },
});
