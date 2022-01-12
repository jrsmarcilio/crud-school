import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/Student/UpdateStudentService";

class UpdateStudentController {
  async edit(request: Request, response: Response) {
    const { name, email, course } = request.body;
    const id = Number(request.params.id);

    const updatedStudentService = new UpdateStudentService();

    await updatedStudentService.updated({
      id,
      name,
      email,
      course,
    });

    return response
      .status(200)
      .json({ message: "Student updated successfully." });
  }
}

export { UpdateStudentController };
