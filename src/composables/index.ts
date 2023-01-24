import type { RouteRecordNormalized } from 'vue-router'

export const site = {
  title: 'Percy Ma',
  canonical: 'https://kecrily.me',
  description: '让世界听到你的声音 | Let the world hear you',
  keywords: ['kecrily', 'blog', 'coder']
}

export interface Markdown extends RouteRecordNormalized {
  lang: string
  title: string
  date: string
  description: string
  tags: string[]
  cover: string
}

export function getRoutes() {
  const router = useRouter()
  return router.getRoutes()
    .map(i => <Markdown>{
      lang: i.meta.lang,
      title: i.meta.title,
      date: i.meta.date,
      description: i.meta.description,
      tags: i.meta.tags,
      cover: i.meta.cover,
      ...i
    })
    .filter(i => i.date)
}

export function formatTime(raw: string | Date) {
  return new Date(raw).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
