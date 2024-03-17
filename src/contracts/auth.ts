import { IUser } from './user'

export type SignInPayload = Pick<IUser, 'email' | 'password'>
