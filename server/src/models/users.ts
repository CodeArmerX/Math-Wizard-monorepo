import { User } from '../schemas/models.types.ts'
import { db, ulid } from '../main.ts'

export async function getUserByID(id: string) {
  const user = await db.get<User>(['users', id])
  return user.value
}

export async function addUser(user: User, id?: string) {
  const actualID = id || ulid()
  const newUser = {
    ...user,
    id: actualID,
  }
  await db.set(['users', newUser.id], newUser)
  await db.set(['users', newUser.username], newUser)
  await db.set(['users', newUser.email], newUser)
  return newUser
}

export async function getUserByUsername(username: User['username']) {
  const user = await db.get<User>(['users', username])
  return user.value
}

export async function getUserByEmail(email: User['email']) {
  const user = await db.get<User>(['users', email])
  return user.value
}

export async function deleteUser(id: User['id']) {
  if (id) {
    const user = await getUserByID(id)
    if (user) {
      await db.delete(['users', id])
      await db.delete(['users', user.username])
      return user
    }
    return
  }
}
export async function updateUserVerificationCode(
  email: User['email'],
  code: number,
) {
  await db.set(['users', email, 'verificationCode'], code, {
    expireIn: 6000000,
  })
}
export async function getUserVerificationCode(email: User['email']) {
  const code = await db.get<number>(['users', email, 'verificationCode'])
  return code.value
}
