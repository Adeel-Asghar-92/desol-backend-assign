import { ClientSession, ObjectId } from "mongoose";

import { User } from "../models";

export const userService = {
  create: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) =>
    // session?: ClientSession
    new User({
    
      email,
    
      password,
     
    }).save(),

  getById: (userId: ObjectId) => User.findById(userId),

  getByEmail: (email: string) => User.findOne({ email }),

  isExistByEmail: (email: string) => User.exists({ email }),


  getAll: () => User.find(),

  find: (filter: any) => User.find(filter),
};
