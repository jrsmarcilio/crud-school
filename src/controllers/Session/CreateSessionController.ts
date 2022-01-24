import { NextFunction, Request, Response } from "express";
import { CreateSessionService } from "../../services/Session/CreateSessionService";

class CreateSessionController {
  async store(request: Request, response: Response, next: NextFunction) {
    const { username, password } = request.body;

    const createSessionService = new CreateSessionService();

    const session = await createSessionService.execute({
      password,
      username,
    });

    response.json(session);
  }
}

export { CreateSessionController };
