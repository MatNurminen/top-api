import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('champ')
export class ChampEntity {
    @PrimaryGeneratedColumn()
    champ_id: number;

    @Column()
    season: number;

    @Column()
    club_id: number;

    @Column()
    league_id: number;

    @Column({ nullable: true })
    games: number;

    @Column({ nullable: true })
    wings: number;

    @Column({ nullable: true })
    ties: number;

    @Column({ nullable: true })
    losts: number;

    @Column({ nullable: true })
    gf: number;

    @Column({ nullable: true })
    ga: number;

    @Column({ nullable: true })
    postseason: string;
}
