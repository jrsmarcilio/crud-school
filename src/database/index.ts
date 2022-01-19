import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "172.17.0.2",
  port: 3306,
  username: "root",
  password: "34544615",
  database: "dbschool",
  entities: [__dirname + "/../entities/*.ts"],
})
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error("Error Connected", err));
