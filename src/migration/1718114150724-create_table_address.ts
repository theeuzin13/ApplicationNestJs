import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1718114150724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE address (
                id INT NOT NULL AUTO_INCREMENT,
                user_id INT NOT NULL,
                complement VARCHAR(255),
                number INT NOT NULL,
                cep VARCHAR(255) NOT NULL,
                city_id INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
                PRIMARY KEY (id),
                FOREIGN KEY (user_id) REFERENCES user(id),
                FOREIGN KEY (city_id) REFERENCES city(id)
            );

            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE addres
            `)
    }

}
