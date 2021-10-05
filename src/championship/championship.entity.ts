import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerEntity } from '../player/player.entity';
import { ClubEntity } from '../club/club.entity';

@Entity('championship')
export class ChampionshipEntity {
    @PrimaryGeneratedColumn()
    championship_id: number;

    @Column()
    season: number;

    @Column({ nullable: true })
    player_id: number;

    @Column()
    club_id: number;

    @Column({ nullable: true })
    games: number;

    @Column({ nullable: true })
    goals: number;

     @ManyToOne(type => PlayerEntity, player => player.championships)
     @JoinColumn({ name: 'player_id' })
     player: PlayerEntity;

     @ManyToOne(type => ClubEntity, club => club.championships)
     @JoinColumn({ name: 'club_id' })
     club: ClubEntity;
}
