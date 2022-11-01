<script lang="ts" setup>
import { site } from '../composables'
</script>

<template>
  <header class="flex items-baseline justify-between">
    <RouterLink to="/" font-semibold text-lg>
      {{ site.title }}
    </RouterLink>
    <a class="ri:rss-fill" href="/feed.xml" target="_blank" title="Subscribe Feed" />
  </header>
</template>
