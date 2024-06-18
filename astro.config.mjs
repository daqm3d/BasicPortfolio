import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    site: 'https://daqm3d.github.io',
    base: 'BasicPortfolio',
  },
  server: {
    host: true,
    hmr: {
      //            host: 'IP'
    },
  },
});
