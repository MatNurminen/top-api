import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CountryEntity } from '../country/country.entity';
import { ChampionshipEntity } from '../championship/championship.entity';

@Entity('player')
export class PlayerEntity {
    @PrimaryGeneratedColumn()
    player_id: number;

    @Column({ nullable: true })
    first_name: string;

    @Column({ nullable: true })
    last_name: string;

    @Column({ nullable: true })
    num: number;

    @Column({ nullable: true })
    pos: string;

    @Column({ nullable: true })
    country_id: number;

    @Column({ nullable: true })
    birth: number;

    @Column({ nullable: true })
    height: number;

    @Column({ nullable: true })
    weight: number;

    @Column({ nullable: true })
    m: string;

    @Column({ nullable: true })
    pos_num: number;

    @Column({ nullable: true })
    start_year: number;

    @Column({ nullable: true })
    end_year: number;

    // @OneToMany(() => ChampionshipEntity, (championship) => championship.player_id)
    // championships: ChampionshipEntity[];
    @OneToMany(type => ChampionshipEntity, championship => championship.player)
    championships: ChampionshipEntity[];

    @ManyToOne(type => CountryEntity, country => country.players)
    @JoinColumn([{ name: 'country_id' }])
    country: CountryEntity;
}
