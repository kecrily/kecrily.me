import { toHtml } from 'hast-util-to-html'
import { Feed } from 'feed'
import { serverQueryContent } from '#content/server'
import { site } from '~/composables'

function processNode(node: any) {
  if (node.tag === 'pre' && node.children.length === 1 && node.children[0].tag === 'code') {
    node.children[0].children = [{
      type: 'text',
      value: node.props?.code
    }]
  }

  node.tagName = node.tag
  node.properties = {
    href: node.props?.href
      ? node.props?.href?.match(/^(https?:)?\/\//) ? node.props?.href : `${site.canonical}/post/${node.props?.href}`
      : undefined,
    src: node.props?.src
      ? node.props?.src?.match(/^(https?:)?\/\//) ? node.props?.src : `${site.canonical}${node.props?.src}`
      : undefined
  }

  delete node.tag

  if (node.children) {
    node.children = node.children
      .map((n: any) => processNode(n))
      .filter((n: any) => n.tagName !== 'style')
  }

  return node
}

export const generateFeed = async(event: any) => {
  const feed = new Feed({
    title: site.name,
    id: `${site.canonical}/`,
    link: site.canonical,
    description: site.description,
    feedLinks: {
      rss: `${site.canonical}/feed.xml`,
      atom: `${site.canonical}/feed.atom`,
      json: `${site.canonical}/feed.json`
    },
    author: {
      name: site.name,
      link: site.canonical
    },
    favicon: `${site.canonical}/favicon.ico`,
    image: `${site.canonical}/avatar.jpg`,
    copyright: ''
  })

  const posts = await serverQueryContent(event, 'post').sort({ date: -1 }).find()

  for (const post of posts) {
    feed.addItem({
      id: `${site.canonical}${post._path}`,
      title: post.title!,
      link: `${site.canonical}${post._path}`,
      description: post.description!,
      date: new Date(post.date),
      image: post.cover ? `${site.canonical}${post.cover}` : undefined,
      content: toHtml(processNode(post.body))
    })
  }

  return feed
}
