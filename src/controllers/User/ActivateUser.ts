import { Request, Response } from "express";
import { ActivateUserService } from "../../services/Users/ActivateUserService";

class ActivateUser {
  async mail(request: Request, response: Response) {
    const { email } = request.params;

    const activateUserService = new ActivateUserService();

    const mail = await activateUserService.active(email);

    return response
      .json({ mail })
      .redirect(`https://next-school.vercel.app/?message=${mail}`);
  }
}

export { ActivateUser };
