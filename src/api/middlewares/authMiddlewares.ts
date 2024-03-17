import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export function authenticate(req: Request, res: Response, next: NextFunction) {
  // Check if the user is authenticated, e.g., by using Passport.js or any other authentication strategy.

  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" }); // User is not authenticated, return an error response.
    } else {
      return next(); // User is authenticated, proceed to the next middleware.
    }
  });
}
