import "dotenv/config";
import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: [
    "https://next-school.vercel.app",
    "https://next-school-52p4zsoke-jrsmarcilio.vercel.app",
    "https://school-ads.herokuapp.com",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

export { corsOptions };
