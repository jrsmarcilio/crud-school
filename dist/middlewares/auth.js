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
exports.middlewareAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authConfig_1 = require("../config/authConfig");
const middlewareAuth = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = request.headers.authorization;
    if (!authHeader)
        throw new Error("Token not provided");
    const [, token] = authHeader.split(" ");
    jsonwebtoken_1.default.verify(token, authConfig_1.authConfig.secret, (error, decoded) => {
        if (error)
            throw new Error("Token not provided");
        request.userId = decoded.id;
        next();
    });
});
exports.middlewareAuth = middlewareAuth;
//# sourceMappingURL=auth.js.map