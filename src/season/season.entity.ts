import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('season')
export class SeasonEntity {
    @PrimaryGeneratedColumn()
    season_id: number;

    @Column()
    year: number;

    @Column()
    season: string;
}
