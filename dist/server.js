"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./database");
require("./config/passportConfig");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const expressSessionConfig_1 = require("./config/expressSessionConfig");
const expressAssyncErrorsConfig_1 = require("./config/expressAssyncErrorsConfig");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "jade");
app.use((0, cors_1.default)({
    origin: "https://next-school.vercel.app/",
    credentials: true,
}));
app.use((0, express_session_1.default)(expressSessionConfig_1.sessionOptions));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(routes_1.routes);
app.use(expressAssyncErrorsConfig_1.ExpressAssyncErrorsConfig);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
//# sourceMappingURL=server.js.map