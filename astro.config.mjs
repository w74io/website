// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Netlify sets URL to the site's primary domain (w74.netlify.app today,
  // www.w74.io after the domain cutover) so OG/canonical URLs always match
  // the domain being shared. Local builds fall back to the final domain.
  site: process.env.URL || 'https://www.w74.io',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});