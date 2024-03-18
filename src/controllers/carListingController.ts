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
  imageUpload: async (req: any, res: Response) => {
    const files = req.files;
    const uploadedFiles = req.files;
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const fileUrls = uploadedFiles.map((file) => {
      return `${req.protocol}://${req.get("host")}/${file.filename}`;
    });

    // const data = await uploadMediaServices(files);
    res.status(200).json({
      message: "Media Uploaded Successfully",
      media: fileUrls,
    });
  },
};
