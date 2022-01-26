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
exports.CreateUser = void 0;
const CreateUserService_1 = require("../../services/Users/CreateUserService");
class CreateUser {
    handle(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password, email } = request.body;
            const createUserService = new CreateUserService_1.CreateUserService();
            const user = yield createUserService.execute({
                name,
                password,
                username,
                email,
            });
            response.json(user);
            return next();
        });
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map