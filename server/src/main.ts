import { Hono } from 'hono'
import { monotonicFactory } from 'ulid'
import { auth } from './routes/auth.ts'
import { courses } from './routes/courses.ts'

export const ulid = monotonicFactory()
export const db = await Deno.openKv()
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.route('/api/courses/', courses)
app.route('/api/auth/', auth)

export default app
