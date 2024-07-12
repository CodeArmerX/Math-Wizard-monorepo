import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { monotonicFactory } from 'ulid'
import { auth } from './routes/auth.ts'
import { courses } from './routes/courses.ts'

export const ulid = monotonicFactory()
export const db = await Deno.openKv()
const app = new Hono()
app.use('/api/*', cors())
app.get('/', (c) => {
  return c.text('Welcome to the Math Wizard API!')
})
app.route('/api/courses/', courses)
app.route('/api/auth/', auth)

export default app
