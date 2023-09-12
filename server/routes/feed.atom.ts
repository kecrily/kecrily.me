import { generateFeed } from '../utils/feed'

export default defineEventHandler(async(event) => {
  appendHeader(event, 'Content-Type', 'application/xml')

  return (await generateFeed(event)).atom1()
})
