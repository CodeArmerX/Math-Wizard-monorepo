import { z } from 'zod'

export const authSchema = z.object({
  username: z.string().min(6).max(16).optional(),
  password: z.string().min(8).max(25).optional(),
  email: z.string().email().optional(),
  code: z.number().min(6).optional(),
})

export const postAuthSchema = z.object({
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
