import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LeagueEntity } from '../league/league.entity';

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

    @ManyToOne(type => LeagueEntity, league => league.logos)
    @JoinColumn([{ name: 'league_id' }])
    league: LeagueEntity;
}
