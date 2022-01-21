import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { IUserRequest } from "../../interface";

class CreateUserService {
  async execute({ username, password, name, email }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!name || !username || !password || !email)
      throw new Error("Incomplete user data");

    const userAlreadExists = await usersRepository.findOne({
      username,
      email,
    });

    if (userAlreadExists) throw new Error("User already exists");

    const user = usersRepository.create({ name, username, password, email });

    await usersRepository.save(user);

    return { name, username, email };
  }
}

export { CreateUserService };
