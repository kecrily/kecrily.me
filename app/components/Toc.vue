<script lang="ts" setup>
import type { Toc } from '@nuxt/content/types'

const props = defineProps<{ toc?: Toc }>()

const isShow = !(
  props.toc?.links.length === 0 || props.toc?.links[0].id === 'footnote-label'
)
</script>

<template>
  <aside v-if="isShow" class="fixed top-0 bottom-0 left-0 pt-44 pl-12 w-xs">
    <nav class="hidden xl:block">
      <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">目录</p>
      <ul class="text-neutral-600 dark:text-neutral-300 space-y-2 text-sm border-l border-neutral-200 dark:border-neutral-700">
        <li
          v-for="link in toc?.links"
          :key="link.id"
          class="pl-3 -ml-px border-l border-transparent hover:border-neutral-400 dark:hover:border-neutral-300 transition-colors"
        >
          <NuxtLink :to="`#${link.id}`" class="block py-1 hover:text-neutral-900 dark:hover:text-white transition-colors">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
