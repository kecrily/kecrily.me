export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  app: { rootId: '_' },
  content: {
    highlight: { theme: 'nord' },
    markdown: {
      rehypePlugins: {
        'rehype-img-size': { dir: 'public' }
      }
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
