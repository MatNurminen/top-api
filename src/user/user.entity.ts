import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    token: string;

    @Column({ nullable: true })
    token_exp: Date;

}
