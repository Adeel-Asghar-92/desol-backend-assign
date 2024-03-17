import { Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import winston from "winston";

import { IBodyRequest } from "../contracts/request";
import { carListingService } from "../services/carLisitngServices";
const bodyParser = require("body-parser");
const { pathToFileURL } = require("url");

export const carListingController = {
  upload: async (
    {
      body: { model, price, phoneNumber, city, images, userId },
    }: IBodyRequest<any>,
    res: Response
  ) => {
    try {
      const newCarListing = await carListingService.create({
        userId,
        model,
        price,
        phoneNumber,
        city,
        images,
      });

      return res.status(StatusCodes.CREATED).json({
        data: newCarListing,
        message: ReasonPhrases.CREATED,
        status: StatusCodes.CREATED,
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },
  imageUpload: async (req: any, res: Response) => {},
};
