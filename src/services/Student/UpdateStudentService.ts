import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";
import { IStudentRequest } from "../../interface";

class UpdateStudentService {
  async updated({ id, userId, name, email, course }: IStudentRequest) {
    const studentRepository = getCustomRepository(StudentRepositories);

    const studentAlreadExists = await studentRepository.findOne({
      id,
      user: { id: userId },
    });

    if (!studentAlreadExists) throw new Error("Student not found");

    return await studentRepository.update(
      { id },
      {
        email: email || studentAlreadExists.email,
        name: name || studentAlreadExists.name,
        course: course || studentAlreadExists.course,
      }
    );
  }
}

export { UpdateStudentService };
