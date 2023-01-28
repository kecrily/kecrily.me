<script lang="ts" setup>
import type { Markdown } from '../composables'

const { path } = useRoute()
const { frontmatter: md } = defineProps<{frontmatter: Markdown}>()
const { meta: { time } } = getRoutes().filter(i => i.path === path)[0]

useHead({
  title: md.title,
  meta: [
    { name: 'description', content: md.description },
    { name: 'keywords', content: md.tags.join(', ') },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: md.title },
    { property: 'og:description', content: md.description },
    { property: 'article:author', content: md.title },
    { property: 'article:published_time', content: md.date },
    { property: 'article:tag', content: md.tags.join(', ') },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: md.title },
    { name: 'twitter:description', content: md.description }
  ],
  link: [
    { rel: 'canonical', href: site.canonical + path }
  ]
})

if (md.cover) {
  useHead({
    meta: [
      { property: 'og:image', content: md.cover },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: md.cover }
    ]
  })
}

if (md.lang)
  useHead({ htmlAttrs: { lang: md.lang } })

</script>

<template>
  <article class="prose">
    <h1>{{ md.title }}</h1>
    <div class="flex mb-4">
      <time :datetime="md.date">{{ formatTime(md.date) }}</time>
      <Dot />
      <div>{{ Math.round(time as number) }} mins</div>
    </div>
    <slot />
  </article>
</template>
