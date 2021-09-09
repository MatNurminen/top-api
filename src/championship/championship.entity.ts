import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('championship')
export class ChampionshipEntity {
    @PrimaryGeneratedColumn()
    championship_id: number;

    @Column()
    season: number;

    @Column()
    player_id: number;

    @Column()
    club_id: number;

    @Column({ nullable: true })
    games: number;

    @Column({ nullable: true })
    goals: number;

}
