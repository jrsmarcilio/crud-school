import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";
import { IStudentRequest } from "../../interface";

class CreateStudentService {
  async execute({ name, email, course, userId }: IStudentRequest) {
    const studentRepository = getCustomRepository(StudentRepositories);

    if (!name || !email || !course || !userId)
      throw new Error("Incomplete student data");

    const studentAlreadExists = await studentRepository.findOne({ email });

    if (studentAlreadExists) throw new Error("Student already exists");

    const student = studentRepository.create({
      name,
      email,
      course,
      user: { id: userId },
    });

    await studentRepository.save(student);

    return student;
  }
}

export { CreateStudentService };
