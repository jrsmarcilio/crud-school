import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Student/CreateStudentService";

class CreateStudentController {
  async handle(request: Request, response: Response) {
    const { name, email, course } = request.body;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({ name, email, course });

    return response.json(student);
  }
}

export { CreateStudentController };
