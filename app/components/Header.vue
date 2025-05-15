<template>
  <header class="flex items-baseline justify-between">
    <h1 v-if="$route.path === '/'" class="font-semibold text-lg">
      {{ site.name }}
    </h1>
    <NuxtLink v-else to="/" aria-label="主页" class="font-semibold text-lg">
      {{ site.name }}
    </NuxtLink>

    <a href="/feed.xml" target="_blank" title="Subscribe Feed" aria-label="Subscribe Feed" class="print:hidden">
      <UnoIcon class="ri:rss-fill" />
    </a>
  </header>
</template>
