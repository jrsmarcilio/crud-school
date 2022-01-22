import { NextFunction, Request, Response } from "express";

const middlewareAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) =>
  request.isAuthenticated()
    ? next()
    : response.status(301).redirect("http://localhost:3000/");

export { middlewareAuth };
