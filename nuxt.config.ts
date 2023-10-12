export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt', 'nuxt-security'],
  app: { rootId: '_', buildAssetsDir: '_' },
  content: {
    highlight: { theme: 'nord' },
    markdown: {
      rehypePlugins: {
        'rehype-img-size': { dir: 'public' }
      }
    }
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: false
    }
  },
  devtools: true,
  experimental: {
    asyncEntry: true,
    componentIslands: true,
    viewTransition: true,
    writeEarlyHints: true,
    headNext: true
  }
})
