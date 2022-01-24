import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { authConfig } from "../config/authConfig";

const middlewareAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token not provided");

  const [, token] = authHeader.split(" ");

  jwt.verify(token, authConfig.secret, (error, decoded: any) => {
    if (error) throw new Error("Token not provided");
    request.userId = decoded.id;
    next();
  });
};
export { middlewareAuth };
