import "reflect-metadata";
import "express-async-errors";
import "./database";

import express from "express";
import cors from "cors";
import path from "path";
import session from "express-session";
import passport from "passport";

import { sessionOptions } from "./config/expressSessionConfig";
import { ExpressAssyncErrorsConfig } from "./config/expressAssyncErrorsConfig";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(
  cors({
    origin: "https://next-school.vercel.app",
    credentials: true,
  })
);

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
import "./config/passportConfig"

app.use(routes);

app.use(ExpressAssyncErrorsConfig);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
