"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: "mysql",
    url: process.env.CLEARDB_DATABASE_URL,
    entities: [__dirname + "/../entities/*.ts"],
    synchronize: true,
    logging: true,
})
    .then(() => {
    console.log("Connected to the database.");
})
    .catch((err) => console.error("Error Connected", err));
//# sourceMappingURL=index.js.map