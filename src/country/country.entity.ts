import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
