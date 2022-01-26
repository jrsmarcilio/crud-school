import { Request, Response } from "express";
import { ShowCourseService } from "../../services/Course/ShowUserService";

class ShowCourse {
  async show(request: Request, response: Response) {
    const { userId } = request;

    const showCourseService = new ShowCourseService();

    const courses = await showCourseService.findAll(userId);

    return response.status(200).json(courses);
  }
}

export { ShowCourse };
