import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";

class ShowStudentService {
  async findAll() {
    const studentRepository = getCustomRepository(StudentRepositories);

    const students = await studentRepository.find();

    if (!students) throw new Error("Students not found");

    return students;
  }
  async findOne(id: number) {
    const studentRepository = getCustomRepository(StudentRepositories);

    const student = await studentRepository.findOne(id);

    if (!student) throw new Error("Student not found");

    return student;
  }
}

export { ShowStudentService };
