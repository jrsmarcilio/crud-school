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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMailController = void 0;
const CreateMailService_1 = require("../../services/Mail/CreateMailService");
class CreateMailController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = request.body;
            return response.render("mail/welcome", {
                name: name,
                email: email,
            }, (error, html) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    throw new Error(error.message);
                const createMailService = new CreateMailService_1.CreateMailService();
                const mail = yield createMailService.sendMail({
                    email: email,
                    subject: "Valide your e-mail address",
                    to: email,
                    html: html,
                });
                return response.json(mail);
            }));
        });
    }
}
exports.CreateMailController = CreateMailController;
//# sourceMappingURL=CreateMailController.js.map