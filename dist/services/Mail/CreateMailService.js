"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
class CreateMailService {
    sendMail(mailDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const mailOptions = {
                from: process.env.MAIL_USER,
                to: mailDTO.email,
                subject: mailDTO.subject,
                html: mailDTO.html,
            };
            const transporter = nodemailer_1.default.createTransport({
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
                if (error)
                    throw new Error(error.message);
                return { message: "Email successfully sent!", mail: info };
            });
        });
    }
}
exports.CreateMailService = CreateMailService;
//# sourceMappingURL=CreateMailService.js.map