import { getCustomRepository } from "typeorm";
import { StudentRepositories } from "../../repositories/StudentRepositories";

class DeleteStudentService {
  async exclude(id: number, idUser: number) {
    const studentRepository = getCustomRepository(StudentRepositories);

    if (!id) throw new Error("Id incorrect");

    const student = await studentRepository.findOne({
      where: {
        id: id,
        user: {
          id: idUser,
        },
      },
    });

    if (!student) throw new Error("Student not found");

    return await studentRepository.remove(student);
  }
}

export { DeleteStudentService };
