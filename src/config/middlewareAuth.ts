import { NextFunction, Request, Response } from "express";

const middlewareAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) =>
  request.isAuthenticated()
    ? next()
    : response.redirect("https://next-school.vercel.app");

export { middlewareAuth };
