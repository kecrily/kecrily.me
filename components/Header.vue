<template>
  <header class="flex items-baseline justify-between">
    <h1 v-if="$route.path === '/'" class="font-semibold text-lg">
      {{ site.name }}
    </h1>
    <NuxtLink v-else to="/" class="font-semibold text-lg">
      {{ site.name }}
    </NuxtLink>
    <a class="ri:rss-fill" href="/feed.xml" target="_blank" title="Subscribe Feed" />
  </header>
</template>
