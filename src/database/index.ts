import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  url: "mysql://b53456eee32bdb:b5a7927d@us-cdbr-east-05.cleardb.net/heroku_851004f20e5d6b0?reconnect=true",
  entities: [__dirname + "/../entities/*.ts"],
  synchronize: true,
})
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error("Error Connected", err));
