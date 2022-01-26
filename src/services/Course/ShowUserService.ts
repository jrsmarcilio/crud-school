import { getCustomRepository } from "typeorm";
import { CoursesRepositories } from "../../repositories/CourseRepositories";

class ShowCourseService {
  async findAll(userId: number) {
    const courseRepository = getCustomRepository(CoursesRepositories);

    const courses = await courseRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });

    if (!courses) throw new Error("Courses not found");

    return courses;
  }
}

export { ShowCourseService };
