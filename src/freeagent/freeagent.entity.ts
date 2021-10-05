import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FreeAgentEntity {
    @PrimaryGeneratedColumn()
    player_id: number;

    @Column({ nullable: true })
    first_name: string;

    @Column({ nullable: true })
    last_name: string;

    @Column({ nullable: true })
    num: number;

    @Column({ nullable: true })
    pos: string;

    @Column({ nullable: true })
    country_id: number;

    @Column({ nullable: true })
    birth: number;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    weight: number;

    @Column({ nullable: true })
    m: string;

    @Column({ nullable: true })
    pos_num: number;

    @Column({ nullable: true })
    start_year: number;

    @Column({ nullable: true })
    end_year: number;
}
