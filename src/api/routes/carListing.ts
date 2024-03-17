import { authenticate } from "../middlewares"; // Import your authentication middleware
import { Router } from "express";

import { carListingValidation } from "../../validations/carListingValidation";
import { carListingController } from "../../controllers/carListingController";

const carListing = (router: Router): void => {
  console.log(router);

  router.post(
    "/carListing/upload",
    carListingValidation.validateCarListing,
    carListingController.upload
  );
};

export default carListing;
