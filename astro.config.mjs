import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  /* buildOptions: {
    site: 'https://daqm3d.github.io',
    base: 'BasicPortfolio',
  },
  devOptions: {
    base: '',
  },

  server: {
    host: true,
    hmr: {
      //            host: 'IP'
    },
  }, */
  server: ({ command }) => ({
    base: command === 'dev' ? '' : 'BasicPortfolio',
    host: true,
    hmr: {
      //            host: 'IP'
    },
  }),
});
