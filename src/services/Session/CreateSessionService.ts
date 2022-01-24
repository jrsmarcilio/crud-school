import { getCustomRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { authConfig } from "../../config/authConfig";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface Session {
  username: string;
  password: string;
}

class CreateSessionService {
  async execute({ username, password }: Session) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!username || !password) throw new Error("User data is incorrect");

    const user = await usersRepository.findOne({ username });

    if (!user) throw new Error("User not found");

    if (!user.isActive) throw new Error("User is not active");

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) throw new Error("Username or password do not match");

    const { id, email } = user;

    return {
      user: {
        id,
        username,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: `7d`,
      }),
    };
  }
}

export { CreateSessionService };
