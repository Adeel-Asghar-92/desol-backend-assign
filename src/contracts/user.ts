import { Model, ObjectId } from "mongoose";

export interface IUser {
  id: ObjectId;
  email: string;
  password: string;
}

export interface IUserMethods {
  comparePassword: (password: string) => boolean;
}

export type UserModel = Model<IUser, unknown, IUserMethods>;
