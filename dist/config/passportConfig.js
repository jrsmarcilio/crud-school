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
const passport_1 = __importDefault(require("passport"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const passport_local_1 = require("passport-local");
const typeorm_1 = require("typeorm");
const UsersRepositories_1 = require("../repositories/UsersRepositories");
const strategyFields = {
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
};
passport_1.default.serializeUser((user, done) => done(null, user.id));
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
    const user = yield usersRepository.findOne({ id });
    if (!user)
        return done(new Error("User not found."), null);
    return done(null, user);
}));
passport_1.default.use(new passport_local_1.Strategy(strategyFields, (_req, username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
    const user = yield usersRepository.findOne({ username });
    if (!user)
        return done(null, false, { message: "User not found." });
    if (user.isActive) {
        const isValid = bcryptjs_1.default.compareSync(password, user.password);
        if (!isValid)
            return done(null, false, {
                message: "Incorrect username or password.",
            });
        return done(null, user, { message: "Login successfully." });
    }
    else {
        return done(null, false, { message: "User not found." });
    }
})));
//# sourceMappingURL=passportConfig.js.map