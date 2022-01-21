import { Request, Response } from "express";
import { ActivateUserService } from "../../services/Users/ActivateUserService";

class ActivateUserController {
  async mail(request: Request, response: Response) {
    const { email } = request.params;

    const activateUserService = new ActivateUserService();

    const isActive = await activateUserService.active(email);

    return response.json(isActive);
  }
}

export { ActivateUserController };
