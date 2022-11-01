<script lang="ts" setup>
useHead({
  htmlAttrs: { lang: 'zh-cmn-Hans-CN' },
  titleTemplate: (title) => { return title ? `${title} | ${site.title}` : site.title },
  meta: [
    { name: 'author', content: site.title },
    { name: 'description', content: site.description },
    { name: 'keywords', content: site.keywords.join(', ') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: site.title },
    { property: 'og:description', content: site.description },
    { property: 'og:image', content: '/favicon.ico' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@kecrily' },
    { name: 'twitter:title', content: site.title },
    { name: 'twitter:description', content: site.description },
  ],
  link: [
    { rel: 'canonical', href: site.canonical },
    { rel: 'alternate', href: '/feed.xml', title: `${site.title}'s RSS 2.0`, type: 'application/atom+xml' },
    { rel: 'alternate', href: '/feed.atom', title: `${site.title}'s Atom RSS`, type: 'application/rss+xml' },
    { rel: 'alternate', href: '/feed.atom', title: `${site.title}'s JSON Feed`, type: 'application/feed+json' },
    { rel: 'me', href: 'https://github.com/kecrily' },
    { rel: 'me', href: 'https://twitter.com/kecrily' },
    { rel: 'me', href: 'mailto:kecrily@gmail.com' },
    { rel: 'pgpkey authn', href: 'https://keys.openpgp.org/vks/v1/by-fingerprint/E6DE7E6D8EF5D458CE205C00A1803D3315E6CCBC' },
    { rel: 'authorization_endpoint', href: 'https://indieauth.com/auth' },
    { rel: 'webmention', href: 'https://webmention.io/kecrily.me/webmention' },
    { rel: 'pingback', href: 'https://webmention.io/kecrily.me/xmlrpc' },
  ],
})
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
@import '@unocss/reset/tailwind.css';

body {
  @apply p-8 mx-auto;
  max-width: 70ch;
}
</style>
