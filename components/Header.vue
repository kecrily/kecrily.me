<template>
  <header class="flex items-baseline justify-between">
    <h1 v-if="$route.path === '/'" class="font-semibold text-lg">
      {{ site.name }}
    </h1>
    <NuxtLink v-else to="/" class="font-semibold text-lg">
      {{ site.name }}
    </NuxtLink>

    <NuxtLink href="/feed.xml" target="_blank" title="Subscribe Feed">
      <UnoIcon class="ri:rss-fill" />
    </NuxtLink>
  </header>
</template>
