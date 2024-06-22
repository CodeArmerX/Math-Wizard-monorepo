import type { User, UserAuth } from '../schemas/models.types.ts'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { validator } from 'hono/validator'
import { sign, verify } from 'hono/jwt'
import { compare, hash } from 'bcrypt'
import { Role } from '../schemas/models.types.ts'
import { ulid } from '../main.ts'
import { sendRecoveryEmail } from '../services/resend.ts'
import { passwordRecoverySchema } from '../schemas/schemas.ts'
import { authMiddleware } from '../middlewares/authMiddleware.ts'
import {
  addUser,
  getUserByEmail,
  getUserByID,
  getUserByUsername,
  getUserVerificationCode,
  updateUserVerificationCode,
} from '../models/users.ts'
import { authSchema, verifyEmailSchema } from '../schemas/schemas.ts'

export const auth = new Hono()

const secret = Deno.env.get('SECRET') || 'secret'

const errorResponse = new Response(
  JSON.stringify({ message: 'Unauthorized' }),
  {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  },
)

auth.post(
  '/',
  validator('json', (value, _c) => {
    const parsedBody = authSchema.safeParse(value)
    if (!parsedBody.success) {
      throw new HTTPException(400, {
        message: 'Invalid request body',
      })
    }
    return parsedBody.data
  }),
  async (c) => {
    try {
      const { code, username, password, email } = c.req.valid('json')
      let verified
      const token = c.req.header('Authorization')?.slice(7)
      if (token) verified = await verify(token, secret)
      if (verified) return c.json({ user: verified })
      // #region Register
      if (username && password && email && !code && !verified) {
        const existingUser = await getUserByUsername(username)
        const existingEmail = await getUserByEmail(email)
        const hashedPassword = await hash(password)
        if (existingEmail) {
          throw new HTTPException(401, {
            message: 'Email already exists. Please choose a different email.',
          })
        }
        if (existingUser) {
          throw new HTTPException(401, {
            message:
              'Username already exists. Please choose a different username.',
          })
        }
        const user = await addUser({
          id: ulid(),
          username,
          email,
          password: hashedPassword,
          role: Role.user,
        }) as User
        const userAuth: UserAuth = {
          id: user.id,
          username: user.username,
        }
        return c.json(userAuth)
      }
      // #region Login
      if (username && password && !email && !code && !verified) {
        const user = await getUserByID(username)
        if (!user) {
          throw new HTTPException(401, {
            message: 'Invalid username or password',
          })
        }
        const isValid = await compare(password, user.password)
        if (!isValid) {
          throw new HTTPException(401, {
            message: 'Invalid username or password',
          })
        }
        const token = await sign(
          { id: user.id, username: user.username },
          secret,
        )
        return c.json({ token })
      }
      // #region Login with email
      if (!username && !password && email && code && !verified) {
        const validCode = await getUserVerificationCode(email)
        const user = await getUserByEmail(email)
        if (validCode !== code) {
          throw new HTTPException(401, {
            message: 'Invalid verification code',
          })
        }
        if (!user) {
          throw new HTTPException(401, {
            message: 'User not found. Please check your email.',
          })
        }
        const token = await sign(
          { id: user.id, username: user.username },
          secret,
        )
        return c.json({ token })
      }
      throw new HTTPException(401, {
        message: 'Invalid username, password, or verification code',
      })
    } catch (e) {
      throw new HTTPException(401, {
        message: 'An error occurred: ' + e.message,
      })
    }
  },
)

// #region Recovery email send

auth.post(
  '/recovery/',
  validator('json', (value, _c) => {
    const parsedEmail = verifyEmailSchema.safeParse(value)
    if (!parsedEmail.success) {
      throw new HTTPException(400, { message: 'Invalid email address' })
    }
    return parsedEmail.data
  }),
  async (c) => {
    const { email } = c.req.valid('json')
    const existingEmail = await getUserByEmail(email)
    if (!existingEmail) {
      throw new HTTPException(400, {
        message:
          'Email not found. Please check your email address and try again.',
      })
    }
    const code = await sendRecoveryEmail(email)
    if (!code) {
      throw new HTTPException(400, {
        message:
          'Email not found. Please check your email address and try again.',
      })
    }
    await updateUserVerificationCode(email, code)
    return c.json({
      success: true,
      mail: `Verification code send to ${email}`,
    })
  },
)
// #region Recovery password
auth.patch(
  '/recovery/',
  validator('json', (value, _c) => {
    const parsed = passwordRecoverySchema.safeParse(value)
    if (!parsed.success) {
      throw new HTTPException(400, {
        message: 'Invalid password recovery request',
        res: errorResponse,
      })
    }
    return parsed.data
  }),
  authMiddleware({ roles: [Role.user] }),
  async (c) => {
    const token = c.req.header('Authorization')?.slice(7)
    if (!token) {
      throw new HTTPException(400, {
        message: 'Token is required for password recovery',
      })
    }
    const { id } = await verify(token, secret) as UserAuth
    const { password } = c.req.valid('json')
    const user = await getUserByID(id)
    if (!user) {
      throw new HTTPException(400, {
        message: 'User not found. Please check your credentials and try again.',
      })
    }
    const hashedPassword = await hash(password)
    const newUser = {
      ...user,
      password: hashedPassword,
    }
    await addUser(newUser, newUser.id)
    return c.json({ success: true, message: 'Password updated successfully' })
  },
)
auth.onError((err, _c) => {
  const authErrorResponse = new Response(
    JSON.stringify({
      success: false,
      message: err.message,
    }),
    {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  return authErrorResponse
})
