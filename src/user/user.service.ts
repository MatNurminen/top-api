import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repo: Repository<UserEntity>
    ) {}

    public async findAllUsers(): Promise<UserDTO[]> {
        return await this.repo.find()
        .then((players)=>players.map((e)=>UserDTO.fromEntity(e)))
    }

    public async findUserById(user_id: number): Promise<UserDTO> {
        const user = await this.repo.findOne(user_id)
        if (!user) {
            throw new NotFoundException(`User #${user_id} not found`)
        }
        return user
    }

    public async create(dto: UserDTO): Promise<UserDTO> {
        return this.repo
          .save(UserDTO.toEntity(dto))
          .then((e) => UserDTO.fromEntity(e))
      }
      
    public async delete(@Param('user_id') user_id: number): Promise<void> {
        const user = await this.repo.findOne(user_id)
        if (!user) {
            throw new NotFoundException(`User #${user_id} not found`)
        }
        this.repo.delete({user_id})
      }
}