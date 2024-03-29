import { Model, ObjectId } from "mongoose";

export interface ICarListing {
  userId: ObjectId;
  model: String;
  price: String;
  phoneNumber: String;
  city: String;
  images: [String];
}

export type UserModel = Model<ICarListing>;
