import { NextFunction, Request, Response } from "express";
import { CreateCourseService } from "../../services/Course/CreateUserService";

class CreateCourse {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { name } = request.body;
    const { userId } = request;

    const createCourseService = new CreateCourseService();

    const course = await createCourseService.execute({ name, userId });

    return response.json(course);
  }
}

export { CreateCourse };
