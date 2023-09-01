import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'

// markdown
import { parse as matter } from 'ultramatter'
import Shiki from 'markdown-it-shiki'
import LinkAttributes from 'markdown-it-link-attributes'
// @ts-expect-error missing types
import Figure from 'markdown-it-figure-caption'
// @ts-expect-error missing types
import Footnote from 'markdown-it-footnote'
import readingTime from 'reading-time'

// ssg
import generateSitemap from 'vite-ssg-sitemap'
import { buildFeed } from './src/scripts/feed'
import { site } from './src/composables'

export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/head']
  },
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      headEnabled: true,
      wrapperComponent: 'Markdown',
      wrapperClasses: '',
      markdownItSetup(md) {
        md.use(Shiki)
        md.use(Footnote)

        md.use(Figure)

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: { target: '_blank', rel: 'noopener' }
        })

        md.renderer.rules.footnote_block_open = () => '<hr><section><ol>'
      }
    }),
    Pages({
      dirs: 'content',
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        const md = readFileSync(path, 'utf-8')
        const { frontmatter } = matter(md)

        route.meta = {
          time: readingTime(md).minutes,
          ...frontmatter,
          ...route.meta
        }

        return { ...route }
      }
    }),
    Unocss(),
    AutoImport({
      vueTemplate: true,
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/head'],
      dirs: ['src/composables'],
      dts: 'src/types/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/components.d.ts'
    }),
    Inspect()
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    async onFinished() {
      generateSitemap({ hostname: site.canonical, generateRobotsTxt: false })
      await buildFeed()
    }
  }
})
