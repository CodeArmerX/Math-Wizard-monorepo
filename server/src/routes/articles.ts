import { Hono } from 'hono'

export const articles = new Hono()

articles.get('/', (c) => {
  return c.text('Articles')
})
