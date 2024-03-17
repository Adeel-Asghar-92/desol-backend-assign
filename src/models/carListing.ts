import { Schema, model } from "mongoose";
import { compareSync } from "bcrypt";

import { ICarListing } from "../contracts/carListing";

const schema = new Schema<ICarListing>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    model: String,
    price: String,
    phoneNumber: String,
    city: String,
    images: [String],
  },
  { timestamps: true }
);

export const CarListing = model<ICarListing>("CarListing", schema);
