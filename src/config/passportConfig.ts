import passport from "passport";
import bcrypt from "bcryptjs";
import { Strategy, IStrategyOptionsWithRequest } from "passport-local";
import { getCustomRepository } from "typeorm";

import { UsersRepositories } from "../repositories/UsersRepositories";

const strategyFields: IStrategyOptionsWithRequest = {
  usernameField: "username",
  passwordField: "password",
  passReqToCallback: true,
};

passport.serializeUser((user: any, done: any) => done(null, user.id));

passport.deserializeUser(async (id: number, done: any) => {
  const usersRepository = getCustomRepository(UsersRepositories);

  const user = await usersRepository.findOne({ id });

  if (!user) return done(new Error("User not found."), null);

  return done(null, user);
});

passport.use(
  new Strategy(strategyFields, async (_req, username, password, done) => {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ username });

    if (!user) return done(null, false, { message: "User not found." });

    if (user.isActive) {
      const isValid = bcrypt.compareSync(password, user.password);

      if (!isValid)
        return done(null, false, {
          message: "Incorrect username or password.",
        });

      return done(null, user, { message: "Login successfully." });
    } else {
      return done(null, false, { message: "User not found." });
    }
  })
);
