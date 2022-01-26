import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Users } from './Users'
import { Courses} from './Courses'

@Entity({ name: "students" })
class Student {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: false, unique: true })
  register: string;

  @Column()
  gender: string;

  @ManyToOne(() => Users, users => users.students)
  user: Users;

  @ManyToOne(() => Courses, courses => courses.students)
  course: Courses;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Student };
