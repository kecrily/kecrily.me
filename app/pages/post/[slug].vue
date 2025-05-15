<script lang="ts" setup>
const route = useRoute()
const postSlug = computed(() => `post-${route.params.slug}`)
const { data: post } = await useAsyncData(
  postSlug,
  () => queryContent(route.path).findOne()
)

if (!post.value)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

useHead({
  title: post.value?.title,
  meta: [
    { name: 'description', content: post.value?.description },
    { name: 'keywords', content: Array.isArray(post.value?.tags) ? post.value.tags.join(', ') : '' },
    { property: 'og:url', content: site.canonical + post.value?._path },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: post.value?.title },
    { property: 'og:description', content: post.value?.description },
    { property: 'og:image', content: site.canonical + (post.value?.cover || '/avatar.jpg') },
    { name: 'twitter:title', content: post.value?.title },
    { name: 'twitter:description', content: post.value?.description },
    { name: 'twitter:image', content: site.canonical + (post.value?.cover || '/avatar.jpg') }
  ],
  link: [
    { rel: 'canonical', href: site.canonical + post.value?._path }
  ]
})
</script>

<template>
  <article class="prose">
    <ContentDoc :head="false">
      <h1>{{ post?.title }}</h1>
      <p class="text-neutral-700 dark:text-neutral-200">
        发布于 <time :datetime="post?.date">{{ formatTime(post?.date) }}</time>
      </p>

      <Toc :value="post?.body?.toc" />
      <ContentRenderer :value="post" />
    </ContentDoc>
  </article>
</template>
