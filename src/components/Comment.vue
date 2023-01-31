<script lang="ts" setup>
const { data } = defineProps<{ data: any[] }>()

const likes = data.filter(i => i['wm-property'] === 'like-of')
const comments = data
  .filter(i => i['wm-property'] === 'in-reply-to')
  .sort((a, b) => new Date(a.published).getTime() - new Date(b.published).getTime())
</script>

<template>
  <div class="w-full absolute left-0 bg-[#0000000a] dark:bg-[#FFFFFF0F]">
    <div class="mx-auto px-6 py-10 space-y-10" style="max-width: 70ch">
      <div class="flex space-x-1">
        <img
          v-for="i in likes"
          :key="i.url"
          :src="i.author.photo"
          :alt="`${i.author.name}'s Avatar`"
          class="w-10 rounded-full"
        >
      </div>

      <div class="space-y-6">
        <div v-for="i in comments" :key="i.url">
          <div class="flex items-center mb-2">
            <img
              :src="i.author.photo"
              :alt="`${i.author.name}'s Avatar`"
              class="w-9 rounded-full mr-2"
            >
            <div>
              <a class="leading-4 block" :href="i.author.url" target="_blank">
                {{ i.author.name }}
              </a>
              <time :datetime="i.published" class="text-sm opacity-90">
                {{ formatTime(i.published) }}
              </time>
            </div>
          </div>
          <div>{{ i.content.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
