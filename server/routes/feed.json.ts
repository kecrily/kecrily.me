import { generateFeed } from '../utils/feed'

export default defineEventHandler(async(event) => {
  appendHeader(event, 'Content-Type', 'application/json')

  return (await generateFeed(event)).json1()
})
