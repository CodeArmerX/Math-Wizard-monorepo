import { Role } from '../schemas/models.types.ts'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { getAllCourses } from '../models/courses.ts'
import { authMiddleware } from '../middlewares/authMiddleware.ts'

export const courses = new Hono()

courses.use(authMiddleware({ roles: [Role.user] }))

// #region Get All Courses
courses.get('/', async (c) => {
  const courses = await getAllCourses()
  if (!courses.ok) {
    throw new HTTPException(500, { message: 'Error getting courses' })
  }
  return c.json(courses.data)
})

// #region Get Course
courses.get('/:id', (c) => {
  return c.json({ message: 'Get Course' })
})
// #region Create Course

courses.post('/', (c) => {
  return c.json({ message: 'Create Course' })
})

// #region Update Course

courses.put('/:id', (c) => {
  return c.json({ message: 'Update Course' })
})

// #region Delete Course

courses.delete('/:id', (c) => {
  return c.json({ message: 'Delete Course' })
})
