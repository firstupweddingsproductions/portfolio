import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [path.join(__dirname, 'src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}')],
  theme: {
    extend: {
      colors: {
        // Sampled directly from Adem's application/CV designs (Canva).
        ink: {
          DEFAULT: '#0A0A0A', // near-black page background
          soft: '#121212',    // raised panels / cards
          line: '#1F1F1F',    // hairline borders
        },
        paper: '#F5F3EF',     // warm off-white — primary text on dark
        amber: {
          DEFAULT: '#B88917',  // brand accent (sampled from the designs)
          bright: '#D8A52A',   // hover / highlight
          dim: '#8A6711',      // pressed / subtle
        },
        fog: '#9A958C',        // muted secondary text
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1680px',
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
    },
  },
  plugins: [],
};
