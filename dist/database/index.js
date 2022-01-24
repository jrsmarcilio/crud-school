"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import "dotenv/config";
const typeorm_1 = require("typeorm");
// createConnection({
//   type: "mysql",
//   url: process.env.CLEARDB_DATABASE_URL,
//   entities: [__dirname + "/../entities/*.js"],
//   synchronize: true,
//   logging: true,
// })
//   .then(() => {
//     console.log("Connected to the database.");
//   })
//   .catch((err) => console.error("Error Connected", err));
(0, typeorm_1.createConnection)({
    type: "mysql",
    host: "172.17.0.2",
    username: "root",
    password: "34544615",
    database: "dbschool",
    port: 3306,
    entities: [__dirname + "/../entities/*.ts"],
    synchronize: true,
    logging: true,
})
    .then(() => {
    console.log("Connected to the database local.");
})
    .catch((err) => console.error("Error Connected", err));
//# sourceMappingURL=index.js.map