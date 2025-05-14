<script lang="ts" setup>
const { data: posts } = await useAsyncData(
  'posts',
  () => queryContent('post').sort({ date: -1 }).only(['title', 'date', '_path']).find()
)
</script>

<template>
  <div class="mt-4 space-y-2" role="list">
    <div v-for="post in posts" :key="post._path" class="flex" role="listitem">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      <hr>
      <time :datetime="post.date">{{ formatTime(post.date) }}</time>
    </div>
  </div>
</template>

<style>
hr {
  @apply border-(0 b-1 dotted #ccc) flex-(grow basis-4 shrink-0) mx-2 self-center;
}
</style>
