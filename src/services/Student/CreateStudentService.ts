import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";
import { IStudentRequest } from "../../interface";

class CreateStudentService {
  async execute({
    name,
    gender,
    register,
    email,
    course,
    userId,
  }: IStudentRequest) {
    const studentRepository = getCustomRepository(StudentRepositories);

    if (!name || !email || !course || !userId || !gender || !register)
      throw new Error("Incomplete student data");

    const studentAlreadExists = await studentRepository.findOne({ register });

    if (studentAlreadExists) throw new Error("Student already exists");

    const student = studentRepository.create({
      course: { id: course },
      email,
      gender,
      name,
      register,
      user: {
        id: userId,
      },
    });

    await studentRepository.save(student);

    return student;
  }
}

export { CreateStudentService };
