<template>
  <header class="flex items-baseline justify-between">
    <RouterLink to="/" class="font-semibold text-lg">
      <h1 v-if="useRoute().path === '/'">{{ site.title }}</h1>
      <template v-else>{{ site.title }}</template>
    </RouterLink>
    <a class="ri:rss-fill" href="/feed.xml" target="_blank" title="Subscribe Feed" />
  </header>
</template>
