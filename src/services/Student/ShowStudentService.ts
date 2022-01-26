import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";

class ShowStudentService {
  async findAll(idUser: number) {
    const studentRepository = getCustomRepository(StudentRepositories);

    const students = await studentRepository.find({
      where: { user: { id: idUser } },
    });

    if (!students) throw new Error("Students not found");

    return students;
  }
  async findOne(idStudent: number, idUser: number) {
    const studentRepository = getCustomRepository(StudentRepositories);

    const student = await studentRepository.findOne({
      where: { id: idStudent, user: { id: idUser } },
    });

    if (!student) throw new Error("Student not found");

    return student;
  }
}

export { ShowStudentService };
