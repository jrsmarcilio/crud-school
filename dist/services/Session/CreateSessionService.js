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
exports.CreateSessionService = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authConfig_1 = require("../../config/authConfig");
const UsersRepositories_1 = require("../../repositories/UsersRepositories");
class CreateSessionService {
    execute({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
            if (!username || !password)
                throw new Error("User data is incorrect");
            const user = yield usersRepository.findOne({ username });
            if (!user)
                throw new Error("User not found");
            if (!user.isActive)
                throw new Error("User is not active");
            const isValid = bcryptjs_1.default.compareSync(password, user.password);
            if (!isValid)
                throw new Error("Username or password do not match");
            const { id, email, name } = user;
            return {
                user: {
                    id,
                    name,
                    username,
                    email,
                },
                token: jsonwebtoken_1.default.sign({ id }, authConfig_1.authConfig.secret, {
                    expiresIn: `7d`,
                }),
            };
        });
    }
}
exports.CreateSessionService = CreateSessionService;
//# sourceMappingURL=CreateSessionService.js.map