import { Hono } from 'hono'

export const auth = new Hono()

auth.get('/', (c) => {
  return c.text('Auth ready!')
})
