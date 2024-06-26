import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://daqm3d.github.io',
  base: 'BasicPortfolio',
  server: {
    host: true,
    /*
    hmr: {
      //            host: 'IP'
    },*/
    devOptions: {
      enabled: true,
      site: 'https://daqm3d.github.io',
      base: 'D',
    },
    buildOptions: {
      site: 'https://daqm3d.github.io',
      base: 'B',
    },
  },
});
