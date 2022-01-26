import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/Student/UpdateStudentService";

class UpdateStudent {
  async edit(request: Request, response: Response) {
    const { name, email, course, gender, register } = request.body;
    const id = Number(request.params.id);
    const { userId } = request;

    const updatedStudentService = new UpdateStudentService();

    await updatedStudentService.updated({
      id,
      gender,
      register,
      userId,
      name,
      email,
      course
    });

    return response
      .status(200)
      .json({ message: "Student updated successfully." });
  }
}

export { UpdateStudent };
