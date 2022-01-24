import "dotenv/config";

const authConfig = {
  secret: `${process.env.SESSION_SECRET}`,
  expiresIn: "7d",
  jwtSession: { session: false },
};

export { authConfig };
