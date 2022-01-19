import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";

import "./database";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors({ origin: "*" }));
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error)
      return response.status(400).json({ error: err.message });

    return response
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
