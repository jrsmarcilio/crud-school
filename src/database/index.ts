import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  url: process.env.CLEARDB_DATABASE_URL,
  entities: [__dirname + "/../entities/*.js"],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => console.error("Error Connected", err));

