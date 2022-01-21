import { Request, Response } from "express";
import { CreateMailService } from "../../services/Mail/CreateMailService";

class CreateMailController {
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;
    return response.render(
      "mail/welcome",
      {
        name: name,
        email: email,
      },
      async (error, html) => {
        if (error) throw new Error(error.message);

        const createMailService = new CreateMailService();

        const mail = await createMailService.sendMail({
          email: email,
          subject: "Valide your e-mail address",
          to: email,
          html: html,
        });

        return response.json(mail);
      }
    );
  }
}

export { CreateMailController };
