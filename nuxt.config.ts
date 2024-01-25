export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  modules: ['@nuxt/content', '@unocss/nuxt'],
  app: { rootId: '_', buildAssetsDir: '_' },
  appConfig: {
    umami: {
      version: 2,
      host: 'https://insight.kecrily.me',
      id: '6466ed6d-39eb-4e70-b349-0cd063e1c7f9'
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
  }
})
