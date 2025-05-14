<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <h1 class="text-4xl pb-2">Not Found</h1>

  <p>This page does not exist.</p>

  <NuxtLink to="/" class="underline">Back to home</NuxtLink>
</template>
