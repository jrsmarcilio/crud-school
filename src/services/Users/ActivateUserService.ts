import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ActivateUserService {
  async active(email: string) {
    const userRepository = getCustomRepository(UsersRepositories);

    const checkEmail = await userRepository.findOne({ email });

    if (!checkEmail) throw new Error("No user found.");
    if (checkEmail.isActive) throw new Error("Account already activated.");

    await userRepository.update(
      { email },
      {
        isActive: true,
      }
    );

    return { message: "Account activated." };
  }
}

export { ActivateUserService };
