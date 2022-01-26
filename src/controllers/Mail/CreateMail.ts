import { Request, Response } from "express";
import { CreateMailService } from "../../services/Mail/CreateMailService";

class CreateMail {
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

        await createMailService.sendMail({
          email: email,
          subject: "Valide your e-mail address",
          to: email,
          html: html,
        });

        return response.json({
          message: "Valide your e-mail to confirm your identity.",
        });
      }
    );
  }
}

export { CreateMail };
