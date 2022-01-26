import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";

import { Student } from "./Student";
import { Users } from "./Users";

@Entity({ name: "courses" })
class Courses {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ nullable: false, length: 50 })
  name: string;

  @OneToMany(() => Student, (student) => student.user)
  students: Student[];

  @ManyToOne(() => Users, users => users.students)
  user: Users;
}

export { Courses };
