import { Hono } from 'hono'
import { auth } from './routes/auth.ts'
import { articles } from './routes/articles.ts'

const app = new Hono()

app.route('/articles/', articles)
app.route('/auth/', auth)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
