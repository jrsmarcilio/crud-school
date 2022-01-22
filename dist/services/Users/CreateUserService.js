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
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../../repositories/UsersRepositories");
class CreateUserService {
    execute({ username, password, name, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
            if (!name || !username || !password || !email)
                throw new Error("Incomplete user data");
            const userAlreadExists = yield usersRepository.findOne({
                username,
                email,
            });
            if (userAlreadExists)
                throw new Error("User already exists");
            const user = usersRepository.create({ name, username, password, email });
            yield usersRepository.save(user);
            return { name, username, email };
        });
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=CreateUserService.js.map