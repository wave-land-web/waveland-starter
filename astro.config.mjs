// @ts-check
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // Replace with your actual site URL
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify({
    imageCDN: false,
    cacheOnDemandPages: true,
  }),
  // Enable experimental features
  experimental: {
    svg: true,
  },
})
