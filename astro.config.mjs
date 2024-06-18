import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    hmr: {
      //            host: 'IP'
    },
  },
  build: {
    site: 'https://daqm3d.github.io',
    base: 'BasicPortfolio',
  },
});
