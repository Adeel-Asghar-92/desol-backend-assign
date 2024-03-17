import { ObjectId } from "mongoose";

import { CarListing } from "../models";

export const carListingService = {
  create: ({
    userId,
    model,
    price,
    phoneNumber,
    city,
    images,
  }: {
    userId: ObjectId;
    model: string;
    price: string;
    phoneNumber: string;
    city: string;
    images: [string];
  }) =>
    // session?: ClientSession
    new CarListing({
      userId,
      model,
      price,
      phoneNumber,
      city,
      images,
    }).save(),

  getById: (id: ObjectId) => CarListing.findById(id),

  getAll: () => CarListing.find(),

  find: (filter: any) => CarListing.find(filter),
};
