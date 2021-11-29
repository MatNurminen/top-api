import {MigrationInterface, QueryRunner} from "typeorm";

export class userCountry1635247277500 implements MigrationInterface {
    name = 'userCountry1635247277500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("country_id" SERIAL NOT NULL, "name" character varying NOT NULL, "s_name" character varying NOT NULL, "flag" character varying NOT NULL, CONSTRAINT "PK_220fe368500f103cf873b01f159" PRIMARY KEY ("country_id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("user_id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "token" character varying, "token_exp" TIMESTAMP, CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
        await queryRunner.query(`ALTER TABLE "player" ADD CONSTRAINT "FK_90bf8f82860a6ff540c8422f318" FOREIGN KEY ("country_id") REFERENCES "country"("country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "player" DROP CONSTRAINT "FK_90bf8f82860a6ff540c8422f318"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "country"`);
    }

}
