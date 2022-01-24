import "dotenv/config";
import { SessionOptions } from "express-session";

const sessionOptions: SessionOptions = {
  secret: `${process.env.SESSION_SECRET}`,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 30,
    httpOnly: true,
  },
};

export { sessionOptions };
