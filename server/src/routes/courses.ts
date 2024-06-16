import { Role } from '../schemas/models.types.ts'
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { HTTPException } from 'hono/http-exception'
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from '../models/courses.ts'
import { authMiddleware } from '../middlewares/authMiddleware.ts'
import { CourseSchema } from '../schemas/schemas.ts'

export const courses = new Hono()

// #region Get All Courses
courses.get(
  '/',
  authMiddleware({ roles: [Role.user, Role.teacher, Role.admin] }),
  async (c) => {
    const courses = await getAllCourses()
    if (!courses.ok) {
      throw new HTTPException(500, { message: 'Error getting courses' })
    }
    return c.json(courses.data)
  },
)

// #region Get Course
courses.get(
  '/:id',
  authMiddleware({ roles: [Role.user, Role.teacher, Role.admin] }),
  async (c) => {
    const { id } = c.req.param()
    const course = await getCourse({ id })
    if (!course.ok) {
      throw new HTTPException(404, { message: 'Course not found' })
    }
    return c.json(course.data)
  },
)
// #region Create Course

courses.post(
  '/',
  authMiddleware({ roles: [Role.teacher, Role.admin] }),
  validator('json', (value, _c) => {
    const parsedBody = CourseSchema.safeParse(value)
    if (!parsedBody.success) {
      throw new HTTPException(400, {
        message: parsedBody.error.message,
      })
    }
    return parsedBody.data
  }),
  async (c) => {
    const {
      title,
      badge,
      content,
      description,
      front,
      units,
    } = c.req.valid(
      'json',
    )
    const newCourse = await createCourse({
      title,
      badge,
      content,
      description,
      front,
      units,
    })
    if (!newCourse.ok) {
      throw new HTTPException(500, { message: newCourse.message })
    }
    return c.json(newCourse)
  },
)

// #region Update Course

courses.put(
  '/:id',
  authMiddleware({ roles: [Role.teacher, Role.admin] }),
  validator('json', (value, _c) => {
    const parsedBody = CourseSchema.safeParse(value)
    if (!parsedBody.success) {
      throw new HTTPException(400, {
        message: parsedBody.error.message,
      })
    }
    return parsedBody.data
  }),
  async (c) => {
    const { id } = c.req.param()
    const {
      title,
      badge,
      content,
      description,
      front,
      units,
    } = c.req.valid(
      'json',
    )
    const newCourse = {
      title,
      badge,
      content,
      description,
      front,
      units,
    }
    const updatedCourse = await updateCourse(id, newCourse)
    if (!updatedCourse.ok) {
      throw new HTTPException(500, { message: 'Error updating course' })
    }
    return c.json(updatedCourse)
  },
)

// #region Delete Course

courses.delete(
  '/:id',
  authMiddleware({ roles: [Role.teacher, Role.admin] }),
  async (c) => {
    const { id } = c.req.param()
    if (!id) {
      throw new HTTPException(400, { message: 'Course ID is required' })
    }
    const deletedCourse = await deleteCourse({ id })
    return c.json(deletedCourse)
  },
)
