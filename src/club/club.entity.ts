import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LeagueEntity } from '../league/league.entity';
import { ChampionshipEntity } from '../championship/championship.entity';
import { ClubLogoEntity } from '../club-logo/club-logo.entity';

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

    @OneToMany(type => ChampionshipEntity, championship => championship.club)
    championships: ChampionshipEntity[];

    @OneToMany(type => ClubLogoEntity, clubLogo => clubLogo.club)
    logos: ClubLogoEntity[];

    @ManyToOne(type => LeagueEntity, league => league.clubs)
    @JoinColumn([{name: 'league_id'}])
    league: LeagueEntity;

}
