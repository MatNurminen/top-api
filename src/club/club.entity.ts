import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('club')
export class ClubEntity {
    @PrimaryGeneratedColumn()
    club_id: number;

    @Column()
    league_id: number;

    @Column()
    club: string;

    @Column({ nullable: true })
    start_year: number;

    @Column({ nullable: true })
    end_year: number;
}
