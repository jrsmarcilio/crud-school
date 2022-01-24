"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
require("dotenv/config");
const sessionOptions = {
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
    },
};
exports.sessionOptions = sessionOptions;
//# sourceMappingURL=expressSessionConfig.js.map