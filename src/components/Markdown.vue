<script lang="ts" setup>
import type { Markdown } from '../composables'

const { path } = useRoute()
const { frontmatter } = defineProps<{ frontmatter: Markdown }>()
const { meta: { time } } = getRoutes().find(i =>
  i.path === path || `${i.path}/` === path
)

useHead({
  title: frontmatter.title,
  meta: [
    { name: 'description', content: frontmatter.description },
    { name: 'keywords', content: frontmatter.tags.join(', ') },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: frontmatter.title },
    { property: 'og:description', content: frontmatter.description },
    { property: 'article:author', content: frontmatter.title },
    { property: 'article:published_time', content: frontmatter.date },
    { property: 'article:tag', content: frontmatter.tags.join(', ') },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: frontmatter.title },
    { name: 'twitter:description', content: frontmatter.description }
  ],
  link: [
    { rel: 'canonical', href: site.canonical + path }
  ]
})

if (frontmatter.cover) {
  useHead({
    meta: [
      { property: 'og:image', content: frontmatter.cover },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: frontmatter.cover }
    ]
  })
}

if (frontmatter.lang)
  useHead({ htmlAttrs: { lang: frontmatter.lang } })
</script>

<template>
  <article class="prose">
    <h1>{{ frontmatter.title }}</h1>
    <div class="flex mb-4">
      <time :datetime="frontmatter.date">{{ formatTime(frontmatter.date) }}</time>
      <Dot />
      <div>{{ Math.round(time as number) }} mins</div>
    </div>
    <slot />
  </article>
</template>
