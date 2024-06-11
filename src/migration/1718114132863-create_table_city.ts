import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1718114132863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE city (
                id INT NOT NULL AUTO_INCREMENT,
                state_id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
                PRIMARY KEY (id),
                FOREIGN KEY (state_id) REFERENCES state(id)
            );

            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE city
            `)
    }

}
