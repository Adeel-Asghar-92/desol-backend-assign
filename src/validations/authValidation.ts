import { NextFunction, Request, Response } from "express";
import validator from "validator";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import winston from "winston";

export const authValidation = {
  signIn: (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      let normalizedEmail =
        req.body.email && validator.normalizeEmail(req.body.email);
      if (normalizedEmail) {
        normalizedEmail = validator.trim(normalizedEmail);
      }

      if (
        !normalizedEmail ||
        !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      Object.assign(req.body, { email: normalizedEmail });

      return next();
    } catch (error) {
      winston.error(error);

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },

  signUp: (req: Request, res: Response, next: NextFunction) => {
    console.log("Runing...1..");
    try {
      if (
        !req.body.email ||
        !req.body.password ||
        !validator.isLength(req.body.password, { min: 6, max: 48 })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      let normalizedEmail =
        req.body.email && validator.normalizeEmail(req.body.email);
      if (normalizedEmail) {
        normalizedEmail = validator.trim(normalizedEmail);
      }

      if (
        !normalizedEmail ||
        !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      Object.assign(req.body, { email: normalizedEmail });

      return next();
    } catch (error) {
      winston.error(error);

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },

  resetPassword: (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.email) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }
      let normalizedEmail =
        req.body.email && validator.normalizeEmail(req.body.email);
      if (normalizedEmail) {
        normalizedEmail = validator.trim(normalizedEmail);
      }

      if (
        !normalizedEmail ||
        !validator.isEmail(normalizedEmail, { allow_utf8_local_part: false })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

      Object.assign(req.body, { email: normalizedEmail });

      return next();
    } catch (error) {
      winston.error(error);

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        status: StatusCodes.BAD_REQUEST,
      });
    }
  },

  newPassword: (req: Request, res: Response, next: NextFunction) => {
    try {
      if (
        !req.body.password ||
        !validator.isLength(req.body.password, { min: 6, max: 48 })
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
          status: StatusCodes.BAD_REQUEST,
        });
      }

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
