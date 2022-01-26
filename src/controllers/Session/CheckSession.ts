import { NextFunction, Request, Response } from "express";

class CheckSession {
  async check(request: Request, response: Response, next: NextFunction) {
    response.json({ checked: true });
  }
}

export { CheckSession };
