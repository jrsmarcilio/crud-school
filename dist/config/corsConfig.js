"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
require("dotenv/config");
const corsOptions = {
    origin: [
        "https://next-school.vercel.app",
        "https://next-school-52p4zsoke-jrsmarcilio.vercel.app",
        "https://school-ads.herokuapp.com",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
};
exports.corsOptions = corsOptions;
//# sourceMappingURL=corsConfig.js.map