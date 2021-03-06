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
exports.ActivateUserController = void 0;
const ActivateUserService_1 = require("../../services/Users/ActivateUserService");
class ActivateUserController {
    mail(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = request.params;
            const activateUserService = new ActivateUserService_1.ActivateUserService();
            const mail = yield activateUserService.active(email);
            return response
                .json({ mail })
                .redirect(`https://next-school.vercel.app/?message=${mail}`);
        });
    }
}
exports.ActivateUserController = ActivateUserController;
//# sourceMappingURL=ActivateUserController.js.map