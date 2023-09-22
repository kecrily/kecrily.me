<script lang="ts" setup>
useHead({
  htmlAttrs: { lang: 'zh-cmn-Hans-CN' },
  titleTemplate(title) {
    return title ? `${title} | ${site.name}` : site.name
  },
  meta: [
    { name: 'author', content: site.name },
    { name: 'description', content: site.description },
    { name: 'keywords', content: site.keywords.join(', ') },
    { property: 'og:url', content: site.canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: site.name },
    { property: 'og:description', content: site.description },
    { property: 'og:image', content: '/avatar.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@kecrily' },
    { name: 'twitter:title', content: site.name },
    { name: 'twitter:description', content: site.description },
    { name: 'twitter:image', content: '/avatar.jpg' }
  ],
  link: [
    { rel: 'canonical', href: site.canonical },
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'alternate', href: '/feed.xml', title: `${site.name}'s RSS 2.0`, type: 'application/atom+xml' },
    { rel: 'alternate', href: '/feed.atom', title: `${site.name}'s Atom RSS`, type: 'application/rss+xml' },
    { rel: 'alternate', href: '/feed.atom', title: `${site.name}'s JSON Feed`, type: 'application/feed+json' },
    { rel: 'me', href: 'https://github.com/kecrily' },
    { rel: 'me', href: 'mailto:kecrily@gmail.com' },
    { rel: 'pgpkey authn', href: 'https://keys.openpgp.org/vks/v1/by-fingerprint/6492E00686064BD8561BADBDA2547DFF0237D6EC' },
    { rel: 'authorization_endpoint', href: 'https://indieauth.com/auth' },
    { rel: 'webmention', href: 'https://webmention.io/kecrily.me/webmention' },
    { rel: 'pingback', href: 'https://webmention.io/kecrily.me/xmlrpc' }
  ]
})
</script>

<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';

body {
  @apply p-8 mx-auto bg-base text-base;
  max-width: 70ch;
}
</style>
