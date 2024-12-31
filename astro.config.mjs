import { defineConfig } from 'astro/config';
    import mdx from '@astrojs/mdx';
    import rss from '@astrojs/rss';

    // https://astro.build/config
    export default defineConfig({
      integrations: [mdx(), rss()],
      site: 'http://localhost:4321',
    });
