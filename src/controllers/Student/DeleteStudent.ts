import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/Student/DeleteStudentService";

class DeleteStudent {
  async delete(request: Request, response: Response) {
    const id = Number(request.params.id);
    const { userId } = request;
   
    const deleteStudentService = new DeleteStudentService();

    await deleteStudentService.exclude(id, userId);

    return response
      .status(200)
      .json({ message: "Student deleted successfully." });
  }
}

export { DeleteStudent };
