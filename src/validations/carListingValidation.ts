import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import winston from "winston";

export const carListingValidation = {
  validateCarListing: (req: Request, res: Response, next: NextFunction) => {
    try {
      const { model, price, phoneNumber, city, images } = req.body;

      // Check if all required fields are present
      if (!model || !price || !phoneNumber || !city || !images) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "All fields are required",
          status: StatusCodes.BAD_REQUEST,
        });
      }

      // Validate the type of each field
      if (
        typeof model !== "string" ||
        typeof price !== "string" ||
        typeof phoneNumber !== "string" ||
        typeof city !== "string" ||
        !Array.isArray(images)
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid field type",
          status: StatusCodes.BAD_REQUEST,
        });
      }

      // Optionally, you can add more specific validation here, such as checking the format of the phone number or the length of the model name

      // If validation passes, proceed to the next middleware
      return next();
    } catch (error) {
      winston.error(error);

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },
};
