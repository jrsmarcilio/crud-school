"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
require("dotenv/config");
const authConfig = {
    secret: `${process.env.SESSION_SECRET}`,
    expiresIn: "7d",
    jwtSession: { session: false },
};
exports.authConfig = authConfig;
//# sourceMappingURL=authConfig.js.map