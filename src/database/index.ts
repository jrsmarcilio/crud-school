import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "dbschool",
  entities: [__dirname + "/../entities/*.ts"],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => console.error("Error Connected", err));
