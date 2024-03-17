import { Router } from "express";

import auth from "./routes/auth";
import carListing from "./routes/carListing";

const router: Router = Router();

const routes: {
  [key: string]: (router: Router) => void;
} = {
  auth,
  carListing,
};

for (const route in routes) {
  routes[route](router);
}

export { router };
