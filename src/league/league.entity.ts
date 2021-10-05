import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClubEntity } from '../club/club.entity';
import { LeagueLogoEntity } from '../league-logo/league-logo.entity';

@Entity('league')
export class LeagueEntity {
    @PrimaryGeneratedColumn()
    league_id: number;
    
    @Column()
    name: string;
    
    @Column()
    s_name: string;
    
    @Column({ nullable: true})
    start_year!: number;
    
    @Column({ nullable: true})
    end_year!: number;

    @Column({ nullable: true})
    color!: string;

    @OneToMany(type => ClubEntity, club => club.league)
    clubs: ClubEntity[];

    @OneToMany(type => LeagueLogoEntity, leagueLogo => leagueLogo.league)
    logos: LeagueLogoEntity[];

}
