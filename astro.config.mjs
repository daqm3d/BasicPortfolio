import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://daqm3d.github.io',
  //base: 'mi-repo',
  server: {
    host: true,
    hmr: {
      //            host: 'IP'
    },
  },
});
