import { Request, Response } from "express";
import { CreateUserService } from "../../services/Users/CreateUserService";
import { CreateMailService } from "../../services/Mail/CreateMailService";
import path from "path";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username, password, email } = request.body;

    const createUserService = new CreateUserService();
    const createMailService = new CreateMailService();

    const user = await createUserService.execute({
      name,
      password,
      username,
      email,
    });

    return response.render(
      "mail/welcome",
      {
        name: user.name,
        emailActiveLink: "http://localhost:3001/",
        blogLink: "http://localhost:3001/",
      },
      async (error, html) => {
        if (error) throw new Error(error.message);

        const mail = await createMailService.sendMail({
          email: user.email,
          subject: "Valide your e-mail address",
          to: user.email,
          html: html,
        });

        return response.json({ mail, user });
      }
    );
  }
}

export { CreateUserController };
