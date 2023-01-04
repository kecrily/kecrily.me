import fs from 'node:fs/promises'
import fg from 'fast-glob'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { Feed } from 'feed'
import { site } from '../composables'

const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export async function buildFeed() {
  const files = await fg('content/post/*.md')

  const posts: any[] = (
    await Promise.all(
      files.map(async(i) => {
        const path = i.split('/').slice(-1)[0].replace('.md', '')
        const raw = await fs.readFile(i, 'utf-8')
        const { data, content } = matter(raw)
        const html = markdown.render(content)

        return {
          ...data,
          id: path,
          link: `${site.canonical}/post/${path}`,
          image: data.cover ? site.canonical + data.cover : false,
          content: html,
        }
      }),
    ))
    .filter(Boolean)

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  const feed = new Feed({
    id: site.canonical,
    title: site.title,
    description: site.description,
    link: site.canonical,
    copyright: '',
    feedLinks: {
      rss: `${site.canonical}/feed.xml`,
      atom: `${site.canonical}/feed.atom`,
      json: `${site.canonical}/feed.json`,
    },
    author: {
      name: site.title,
      link: site.canonical,
    },
    favicon: `${site.canonical}/favicon.ico`,
    image: `${site.canonical}/favicon.ico`,
  })

  posts.forEach(item => feed.addItem(item))

  await fs.writeFile('./dist/feed.xml', feed.rss2(), 'utf-8')
  await fs.writeFile('./dist/feed.atom', feed.atom1(), 'utf-8')
  await fs.writeFile('./dist/feed.json', feed.json1(), 'utf-8')
}
