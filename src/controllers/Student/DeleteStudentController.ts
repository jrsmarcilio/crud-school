import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/Student/DeleteStudentService";

class DeleteStudentController {
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const { userId } = request;

    const deleteStudentService = new DeleteStudentService();

    await deleteStudentService.exlude(Number(id), userId);

    return response
      .status(200)
      .json({ message: "Student deleted successfully." });
  }
}

export { DeleteStudentController };
