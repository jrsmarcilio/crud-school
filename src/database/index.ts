import "dotenv/config";
import { createConnection } from "typeorm";
console.log(process.env.CLEARDB_DATABASE_URL);
createConnection({
  type: "mysql",
  url: process.env.CLEARDB_DATABASE_URL,
  entities: [__dirname + "/../entities/*.ts"],
  synchronize: true,
})
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error("Error Connected", err));
