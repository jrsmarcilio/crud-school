import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Student/CreateStudentService";

class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { name, email, course } = request.body;
    const { userId } = request;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({
      name,
      email,
      course,
      userId,
    });

    return response.json(student);
  }
}

export { CreateStudentController };
