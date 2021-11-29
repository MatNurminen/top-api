import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerEntity } from '../player/player.entity';

@Entity('country')
export class CountryEntity {
    @PrimaryGeneratedColumn()
    country_id: number;
    
    @Column()
    name: string;
    
    @Column()
    s_name: string;
    
    @Column()
    flag: string;

    @Column()
    jersey: string;

    @OneToMany(() => PlayerEntity, player => player.country_id)
    players: PlayerEntity[]
}
