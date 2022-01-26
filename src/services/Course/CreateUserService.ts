import { getCustomRepository } from "typeorm";
import { CoursesRepositories } from "../../repositories/CourseRepositories";

interface IShowCourse {
  name: string;
  userId: number;
}

class CreateCourseService {
  async execute({ name, userId }: IShowCourse) {
    const courseRepository = getCustomRepository(CoursesRepositories);

    if (!name) throw new Error("Incomplete course data");

    const courseExists = await courseRepository.findOne({
      where: { name: name, user: { id: userId } },
    });

    if (courseExists) throw new Error("Course already exists");

    const course = courseRepository.create({ name, user: { id: userId } });

    await courseRepository.save(course);

    return course;
  }
}

export { CreateCourseService };
