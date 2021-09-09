import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('club_logo')
export class ClubLogoEntity {
    @PrimaryGeneratedColumn()
    club_logo_id: number;

    @Column()
    club_id: number;

    @Column()
    start_year: number;

    @Column()
    logo: string;

    @Column({ nullable: true })
    end_year: number;
}
