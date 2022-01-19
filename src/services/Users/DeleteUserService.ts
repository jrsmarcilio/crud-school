import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class DeleteUserService {
  async exlude(id: number) {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!id) throw new Error("Id incorrect");

    const user = await userRepository.findOne({ id })

    if (!user) throw new Error("User not found");

    return userRepository.delete(user);
  }
}

export { DeleteUserService };
