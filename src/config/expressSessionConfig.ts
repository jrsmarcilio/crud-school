import "dotenv/config";
import { SessionOptions } from "express-session";

const sessionOptions: SessionOptions = {
  secret: `${process.env.SESSION_SECRET}`,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
  },
};

export { sessionOptions };
