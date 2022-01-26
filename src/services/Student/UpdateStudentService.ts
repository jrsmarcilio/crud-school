import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";
import { IStudentRequest } from "../../interface";

class UpdateStudentService {
  async updated({
    id,
    gender,
    register,
    userId,
    name,
    email,
    course,
  }: IStudentRequest) {
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
        gender: gender || studentAlreadExists.gender,
        register: register || studentAlreadExists.register,
        course: { id: course || studentAlreadExists.course.id },
      }
    );
  }
}

export { UpdateStudentService };
