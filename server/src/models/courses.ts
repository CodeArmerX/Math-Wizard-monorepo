import type { Course } from '../schemas/models.types.ts'
import { ulid, db } from '../main.ts'

// #region Create Course

export async function createCourse({ 
    front,
    description, 
    badge, 
    content, 
    units
 }: Course) {
    const newCourse = {
        id: ulid(),
        front,
        description,
        badge,
        content,
        units
    }
    await db.set(["courses", newCourse.id], newCourse)
    return {
        ok: true,
        message: `Course with id ${newCourse.id} created`
    }
}

// #region Get Course

export async function getCourse({ id }: { id: string }){
    const course = await db.get<Course>(["courses", id])
    const data = {
        ok: true,
        data: course
    }
    return data
}

// #region Get All Courses

export async function getAllCourses() {
    const entries = db.list<Course>({prefix: ["courses"]})
    const games = []
    for await (const game of entries) games.push(game)
    return {
        ok: true,
        data: games
    }
}

// #region Update Course

export async function updateCourse(id: string, {
    front, 
    description, 
    badge, 
    content, 
    units 
}: Course) {
    const course = await db.get<Course>(["courses", id])
    const newCourse = {
        ...course,
        front,
        description,
        badge,
        content,
        units
    }
    await db.set(["courses", id], newCourse)
    return {
        ok: true,
        message: `Course with id ${id} updated`
    }
}

// #region Delete Course

export async function deleteCourse({ id }: { id: string }) {
    if (id){
        await db.delete(["courses", id])
        return {
            ok: true,
            message: `Course with id ${id} deleted`
        }
    }
}