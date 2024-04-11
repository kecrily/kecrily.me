<script lang="ts" setup>
import type { Toc } from '@nuxt/content/types'

const props = defineProps<{ toc?: Toc }>()

const isShow = !(
  props.toc?.links.length === 0 || props.toc?.links[0].id === 'footnote-label'
)
</script>

<template>
  <aside v-if="isShow" class="fixed ml-12 left-0 top-44">
    <ul class="text-neutral-600 dark:text-neutral-300 hidden xl:block space-y-1">
      <li
        v-for="link in toc?.links"
        :key="link.id"
        class="hover:text-neutral-700 dark:hover:text-neutral-100"
      >
        <NuxtLink :to="`#${link.id}`" class="block">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </aside>
</template>
