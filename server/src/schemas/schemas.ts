import { z } from 'zod'

export const authSchema = z.object({
  username: z.string().min(6).max(16).optional(),
  password: z.string().min(8).max(25).optional(),
  email: z.string().email().optional(),
  code: z.number().min(6).optional(),
})
export const verifyEmailSchema = z.object({
  email: z.string().email(),
})
export const passwordRecoverySchema = z.object({
  password: z.string().min(8).max(20),
})

export const ComponentSchema = z.object({
  'type': z.string(),
  'content': z.string().optional(),
  'source': z.string().optional(),
  'sourceType': z.string().optional(),
})
export type Component = z.infer<typeof ComponentSchema>

export const UnitSchema = z.object({
  'grade': z.number(),
  'title': z.string(),
  'front': z.string(),
  'content': z.array(ComponentSchema),
})
export type Unit = z.infer<typeof UnitSchema>

export const CourseSchema = z.object({
  'title': z.string(),
  'front': z.string(),
  'description': z.string(),
  'badge': z.string(),
  'content': z.array(ComponentSchema),
  'units': z.array(UnitSchema),
})
export type Course = z.infer<typeof CourseSchema>
