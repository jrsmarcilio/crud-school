"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./database");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const expressAssyncErrorsConfig_1 = require("./config/expressAssyncErrorsConfig");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "jade");
app.use((0, cors_1.default)({ origin: "*" }));
app.use(routes_1.routes);
app.use(expressAssyncErrorsConfig_1.ExpressAssyncErrorsConfig);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
//# sourceMappingURL=server.js.map