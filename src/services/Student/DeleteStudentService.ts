import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";

class DeleteStudentService {
  async exlude(id: number) {
    const studentRepository = getCustomRepository(StudentRepositories);

    if (!id) throw new Error("Id incorrect");

    const student = await studentRepository.findOne({ id });

    if (!student) throw new Error("Student not found");

    return studentRepository.delete(student);
  }
}

export { DeleteStudentService };
