<script lang="ts" setup>
import type { Toc } from '@nuxt/content/types'

const props = defineProps<{ value?: Toc }>()

const isShow = !(
  props.value?.links.length === 0 || props.value?.links[0].id === 'footnote-label'
)
</script>

<template>
  <aside v-if="isShow" class="xl:fixed top-0 bottom-0 left-0 xl:pt-44 xl:pl-12 w-xs not-prose">
    <nav id="toc">
      <h2 class="text-sm text-neutral-700 font-medium mb-3">目录</h2>
      <ul class="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 border-l border-neutral-200 dark:border-neutral-700">
        <li
          v-for="link in value?.links"
          :key="link.id"
          class="pl-3 -ml-px border-l border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 transition-colors"
        >
          <NuxtLink :to="`#${link.id}`" class="block py-1 hover:text-neutral-900 dark:hover:text-white transition-colors">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
