import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";

import bcrypt from "bcryptjs";

@Entity({ name: "users" })
class Users {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ name: "is_active", nullable: false, type: "tinyint" })
  isActive: boolean;

  @Column({ nullable: true })
  password: string;

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
