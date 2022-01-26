import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCourse1643141544320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "courses",
        columns: [
          {
            name: "id",
            type: "integer",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "course",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable("courses");
  }
}
