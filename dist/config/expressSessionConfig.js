"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
require("dotenv/config");
const sessionOptions = {
    secret: String(process.env.SESSION_SECRET),
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE),
        httpOnly: true,
    },
};
exports.sessionOptions = sessionOptions;
//# sourceMappingURL=expressSessionConfig.js.map