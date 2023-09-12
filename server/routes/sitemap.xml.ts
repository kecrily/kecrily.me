import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'
import { site } from '~/composables'

export default defineEventHandler(async(event) => {
  const routes = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({ hostname: site.canonical })

  sitemap.write({ url: '/', changefreq: 'daily' })

  for (const route of routes)
    sitemap.write({ url: route._path, changefreq: 'monthly' })

  sitemap.end()

  appendHeader(event, 'Content-Type', 'application/xml')

  return streamToPromise(sitemap)
})
