import "dotenv/config";
import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "https://next-school.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200,
};

export { corsOptions };
