<script lang="ts" setup>
const posts = getRoutes().filter(i => i.path.startsWith('/post'))
</script>

<template>
  <div class="mt-4 space-y-2" role="list">
    <div v-for="post in posts" :key="post.path" class="flex" role="listitem">
      <RouterLink :to="post.path">{{ post.title }}</RouterLink>
      <hr>
      <time :datetime="post.date">{{ formatTime(post.date) }}</time>
    </div>
  </div>
</template>

<style>
hr{
  @apply border-(0 b-1 dotted #ccc) flex-(grow basis-4 shrink-0) mx-2 self-center;
}
</style>
