import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { IUserRequest } from "../../interface";

class CreateUserService {
    async execute({ username, password, name }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!name || !username || !password) throw new Error("Incomplete user data");

        const userAlreadExists = await usersRepository.findOne({ username });

        if (userAlreadExists) throw new Error("User already exists");

        const user = usersRepository.create({ name, username, password });

        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserService };
