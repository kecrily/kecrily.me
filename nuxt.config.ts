export default defineNuxtConfig({
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
    componentIslands: true,
    viewTransition: true,
    writeEarlyHints: true,
    headNext: true
  },

  devtools: {
    enabled: true
  }
})
