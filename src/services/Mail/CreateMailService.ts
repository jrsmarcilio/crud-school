import nodemailer, { SendMailOptions } from "nodemailer";
import { MailDTO } from "../../interface";
import "dotenv/config";

class CreateMailService {
  async sendMail(mailDTO: MailDTO) {
    const mailOptions: SendMailOptions = {
      from: process.env.MAIL_USER,
      to: mailDTO.email,
      subject: mailDTO.subject,
      html: mailDTO.html,
    };

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      options: {
        host: process.env.MAIL_HOST,
        port: 587,
        tls: { rejectUnauthorized: false },
        authMethod: "PLAIN",
      },
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) throw new Error(error.message);
      return { message: "Email successfully sent!", mail: info };
    });
  }
}

export { CreateMailService };
