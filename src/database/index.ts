import { createConnection } from "typeorm";
import { Student } from "../entities/Student";

createConnection({
  type: "mysql",
  host: "172.17.0.2",
  port: 3306,
  username: "root",
  password: "34544615",
  database: "tutorial",
  entities: [__dirname + "/../entities/*.ts"],
})
  .then(() => {
    console.log(__dirname + "/../entities/*.ts");
    console.log("Connected");
  })
  .catch((err) => console.error("Error Connected", err));
