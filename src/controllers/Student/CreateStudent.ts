import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Student/CreateStudentService";

class CreateStudent {
  async handle(request: Request, response: Response) {
    const { name, email, course, gender, register } = request.body;
    const { userId } = request;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({
      name,
      gender,
      register,
      email,
      course,
      userId,
    });

    return response.json(student);
  }
}

export { CreateStudent };
