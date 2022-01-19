import { Request, Response } from "express";
import { CreateUserService } from "../../services/Users/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password } = request.body;

    console.log(name, username, password)

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, password, username });

    return response.json(user)
  }
}

export { CreateUserController };
