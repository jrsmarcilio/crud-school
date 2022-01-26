import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToMany,
} from "typeorm";

import bcrypt from "bcryptjs";
import { Student } from "./Student";
import { Courses } from "./Courses";

@Entity({ name: "users" })
class Users {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ name: "is_active", nullable: false, type: "tinyint", default: 0 })
  isActive: boolean;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Student, (student) => student.user)
  students: Student[];

  @OneToMany(() => Courses, (courses) => courses.user)
  courses: Courses[];

  @BeforeInsert()
  async encryptPassword(): Promise<void> {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 8);
    }
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Users };
