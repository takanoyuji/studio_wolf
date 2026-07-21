// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://studio-wolf.site',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
})
