export interface Course {
  id?: string
  title: string
  front: string
  description: string
  badge: string
  content: Component[]
  units: Unit['id'][]
}
export interface Unit {
  id?: string
  grade: number
  title: string
  front: string
  content: Component[]
}
interface Component {
  id?: string
  type: string
  content: string
}
export interface Text extends Component {
  type: string
}
export interface Image extends Component {
  type: string
  source: string
}
export interface Link extends Component {
  type: string
  source: string
  sourceType: 'url' | 'pdf' | 'video'
}
export enum Role {
  user,
  teacher,
  admin,
}
export interface User {
  readonly id: string
  username: string
  email: string
  password: string
  role: Role
  courses?: Course['id'][] | null
}
export type UserAuth = {
  id: User['id']
  username: User['username']
}
