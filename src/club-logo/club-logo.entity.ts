import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClubEntity } from '../club/club.entity';

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

    @ManyToOne(type => ClubEntity, club => club.logos)
    @JoinColumn([{ name: 'club_id' }])
    club: ClubEntity;
}
