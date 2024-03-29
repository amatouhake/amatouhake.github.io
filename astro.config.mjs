import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['normalize.css'],
    }
  },
  site: 'https://amatouhake.github.io'
});
