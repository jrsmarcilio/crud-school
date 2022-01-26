import { EntityRepository, Repository } from "typeorm";
import { Courses } from "../entities/Courses";

@EntityRepository(Courses)
class CoursesRepositories extends Repository<Courses> {}

export { CoursesRepositories };
