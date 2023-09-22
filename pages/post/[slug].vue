<script lang="ts" setup>
const { path } = useRoute()
const post = await queryContent(path).findOne()

useHead({
  title: post.title,
  meta: [
    { name: 'description', content: post.description },
    { name: 'keywords', content: post.tags.join(', ') },
    { property: 'og:url', content: site.canonical + post._path },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.description },
    { property: 'og:image', content: site.canonical + (post.cover ? post.cover : '/avatar.jpg') },
    { name: 'twitter:title', content: post.title },
    { name: 'twitter:description', content: post.description },
    { name: 'twitter:image', content: site.canonical + (post.cover ? post.cover : '/avatar.jpg') }
  ],
  link: [
    { rel: 'canonical', href: site.canonical + post._path }
  ]
})

definePageMeta({
  validate: async({ params: { slug } }) => {
    return !!await queryContent(`post/${String(slug)}`).findOne()
  }
})
</script>

<template>
  <article class="prose">
    <ContentDoc>
      <h1>{{ post.title }}</h1>
      <div class="flex mb-4">
        <time :datetime="post.date">{{ formatTime(post.date) }}</time>
      </div>
      <ContentRenderer :value="post" tag="main" />
    </ContentDoc>
  </article>
</template>
