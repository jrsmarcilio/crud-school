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
exports.ActivateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../../repositories/UsersRepositories");
class ActivateUserService {
    active(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
            const checkEmail = yield userRepository.findOne({ email });
            if (!checkEmail)
                throw new Error("No user found.");
            if (checkEmail.isActive)
                throw new Error("Account already activated.");
            yield userRepository.update({ email }, {
                isActive: true,
            });
            return { message: "Account activated." };
        });
    }
}
exports.ActivateUserService = ActivateUserService;
//# sourceMappingURL=ActivateUserService.js.map