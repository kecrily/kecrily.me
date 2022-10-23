<script lang="ts" setup>
import { site } from '../composables'
</script>

<template>
  <header>
    <RouterLink to="/" font-semibold text-lg>
      {{ site.title }}
    </RouterLink>
  </header>
</template>
