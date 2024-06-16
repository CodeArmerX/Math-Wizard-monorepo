import type { Course } from '../schemas/schemas.ts'
import { db, ulid } from '../main.ts'

// #region Create Course

export async function createCourse({
  title,
  front,
  description,
  badge,
  content,
  units,
}: Course) {
  const exist = await db.get<Course>(['courses', title])
  if (exist.value?.title) {
    return {
      ok: false,
      message: 'Course already exists',
      data: null,
    }
  }
  const newCourse = {
    id: ulid(),
    title,
    front,
    description,
    badge,
    content,
    units,
  }
  await db.set(['courses', newCourse.id], newCourse)
  await db.set(['courses', title], newCourse)
  return {
    ok: true,
    message: `Course with id ${newCourse.id} created`,
    data: newCourse,
  }
}

// #region Get Course

export async function getCourse({ id }: { id: string }) {
  const course = (await db.get<Course>(['courses', id])).value
  if (!course) return { ok: false, message: 'Course not found', data: null }
  const data = {
    ok: true,
    data: course,
  }
  return data
}

// #region Get All Courses

export async function getAllCourses() {
  const entries = db.list<Course>({ prefix: ['courses'] })
  const games = []
  for await (const game of entries) games.push(game)
  return {
    ok: true,
    data: games,
  }
}

// #region Update Course

export async function updateCourse(id: string, {
  title,
  front,
  description,
  badge,
  content,
  units,
}: Course) {
  const course = (await db.get<Course>(['courses', id])).value
  const newCourse = {
    ...course,
    title,
    front,
    description,
    badge,
    content,
    units,
  }
  await db.set(['courses', id], newCourse)
  return {
    ok: true,
    message: `Course with id ${id} updated`,
    data: newCourse,
  }
}

// #region Delete Course

export async function deleteCourse({ id }: { id: string }) {
  if (id) {
    await db.delete(['courses', id])
    return {
      ok: true,
      message: `Course with id ${id} deleted`,
    }
  }
}
