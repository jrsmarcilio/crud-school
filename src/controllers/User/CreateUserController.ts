import { NextFunction, Request, Response } from "express";
import { CreateUserService } from "../../services/Users/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { name, username, password, email } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      password,
      username,
      email,
    });

    response.json(user);

    return next();
  }
}

export { CreateUserController };
