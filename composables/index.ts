export function formatTime(raw: string | Date) {
  return new Date(raw).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const site = {
  name: 'Percy Ma',
  canonical: 'https://kecrily.me',
  description: '让世界听到你的声音 | Let the world hear you',
  keywords: ['kecrily', 'blog', 'coder']
}
