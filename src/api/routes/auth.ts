import express from "express";
import { authenticate } from "../middlewares"; // Import your authentication middleware
import { Router } from "express";
// import { User } from "./userModel"; // Import your User model

// const router = express.Router();
import { authValidation } from "../../validations/authValidation";
import { authController } from "../../controllers/authController";

const auth = (router: Router): void => {
  console.log(router);

  router.post("/auth/sign-in", authValidation.signIn, authController.signIn);

};


export default auth;
