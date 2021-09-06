import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
