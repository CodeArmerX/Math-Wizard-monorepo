import type { UserAuth } from '../schemas/models.types.ts'
import { HTTPException } from 'hono/http-exception'
import type { MiddlewareHandler } from 'hono'
import { verify } from 'hono/jwt'
import { Role } from '../schemas/models.types.ts'
import { getUserByID } from '../models/users.ts'

const secret = Deno.env.get('SECRET') || 'secret'
export const authMiddleware = (options: {
  roles: Role[]
}): MiddlewareHandler => {
  const authorizedRoles = options.roles
  return async function authMiddleware(c, next) {
    try {
      const token = c.req.header('Authorization')?.slice(7)
      if (!token) {
        throw new HTTPException(401, {
          message: 'Authorization token is required',
        })
      }
      const userAuth = await verify(token, secret) as UserAuth
      const user = await getUserByID(userAuth.id)
      if (!user) {
        throw new HTTPException(401, {
          message: 'User not found',
        })
      }
      if (user && !authorizedRoles.includes(user.role)) {
        throw new HTTPException(401, {
          message: 'User is not authorized to access this resource',
        })
      }
      await next()
    } catch (e) {
      throw new HTTPException(401, { message: `Invalid token: ${e.message}` })
    }
  }
}
