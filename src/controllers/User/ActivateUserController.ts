import { Request, Response } from "express";
import { ActivateUserService } from "../../services/Users/ActivateUserService";

class ActivateUserController {
  async mail(request: Request, response: Response) {
    const { email } = request.params;

    const activateUserService = new ActivateUserService();

    const mail = await activateUserService.active(email);

    return response
      .json({ message: mail })
      .redirect(`https://next-school.vercel.app/?message=${mail}`);
  }
}

export { ActivateUserController };
