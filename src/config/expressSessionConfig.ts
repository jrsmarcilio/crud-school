import "dotenv/config";
import { SessionOptions } from "express-session";

const sessionOptions: SessionOptions = {
  secret: String(process.env.SESSION_SECRET),
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE),
    httpOnly: true,
  },
};

export { sessionOptions };
