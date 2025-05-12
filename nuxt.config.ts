export default defineNuxtConfig({
  compatibilityDate: '2025-05-13',
  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxt/content', '@unocss/nuxt'],
  app: { rootId: '_', buildAssetsDir: 'k' },

  nitro: {
    prerender: {
      routes: [
        '/feed.atom',
        '/feed.json',
        '/feed.xml',
        '/sitemap.xml'
      ]
    }
  },

  content: {
    highlight: { theme: 'nord' },
    markdown: {
      rehypePlugins: {
        'rehype-img-size': { dir: 'public' }
      }
    }
  },

  experimental: {
    asyncEntry: true,
    viewTransition: true,
    writeEarlyHints: true
  },

  devtools: {
    enabled: true
  }
})
