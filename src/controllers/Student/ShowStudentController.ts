import { Request, Response } from "express";
import { ShowStudentService } from "../../services/Student/ShowStudentService";

class ShowStudentController {
  async show(request: Request, response: Response) {
    const showStudentService = new ShowStudentService();

    const students = await showStudentService.findAll();

    return response.status(200).json(students);
  }
  async index(request: Request, response: Response) {
    const { id } = request.params;
    const showStudentService = new ShowStudentService();

    const student = await showStudentService.findOne(Number(id));

    return response.status(200).json(student);
  }
}

export { ShowStudentController };
