import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RosterEntity {
    @PrimaryGeneratedColumn()
    championship_id: number;

    @Column({ nullable: true })
    pos: string;

    @Column({ nullable: true })
    num: number;

    @Column({ nullable: true })
    first_name: number;

    @Column({ nullable: true })
    last_name: string;

    @Column({ nullable: true })
    flag: string;

    @Column({ nullable: true })
    birth: number;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    weight: number;

    @Column({ nullable: true })
    pos_num: number;

    @Column({ nullable: true })
    club_id: number;

    @Column({ nullable: true })
    club: string;

    @Column({ nullable: true })
    logo: string;

    @Column({ nullable: true })
    league_logo: string;

    @Column({ nullable: true })
    league_name: string;

    @Column({ nullable: true })
    pl_id: number;

    @Column({ nullable: true })
    age: number;
}
