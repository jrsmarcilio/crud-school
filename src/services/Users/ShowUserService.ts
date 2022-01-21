import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ShowUserService {
  async findAll() {
    const userRepository = getCustomRepository(UsersRepositories);

    const users = await userRepository.find();

    if (!users) throw new Error("Users not found");

    return users;
  }
  async findOne(id: number) {
    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne(id);

    if (!user) throw new Error("User not found");

    return user;
  }
}

export { ShowUserService };
