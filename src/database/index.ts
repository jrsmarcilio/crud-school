import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "aluno",
  database: "jrsmarc",
  entities: [__dirname + "/../entities/*.ts"],
})
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error("Error Connected", err));
