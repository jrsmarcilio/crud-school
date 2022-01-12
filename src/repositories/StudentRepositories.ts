import { EntityRepository, Repository } from "typeorm";
import { Student } from "../entities/Student";

@EntityRepository(Student)
class StudentRepositories extends Repository<Student> {}

export { StudentRepositories };
