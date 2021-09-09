import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('league_logo')
export class LeagueLogoEntity {
    @PrimaryGeneratedColumn()
    league_logo_id: number;

    @Column()
    league_id: number;

    @Column()
    start_year: number;

    @Column({ nullable: true })
    end_year: number;

    @Column()
    logo: string;
}
