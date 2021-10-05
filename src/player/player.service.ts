import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PlayerDTO } from './player.dto';
import { PlayerEntity } from './player.entity';

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly repo: Repository<PlayerEntity>
    ) {}

    public async findAllPlayers(): Promise<PlayerDTO[]> {
        return await this.repo.find()
        .then((players)=>players.map((e)=>PlayerDTO.fromEntity(e)))
    }

    public async findPlayerById(player_id: number): Promise<PlayerDTO> {
        const player = await this.repo.findOne(player_id)
        if (!player) {
            throw new NotFoundException(`Player #${player_id} not found`)
        }
        return player
    }

    public async create(dto: PlayerDTO): Promise<PlayerDTO> {
        return this.repo
          .save(PlayerDTO.toEntity(dto))
          .then((e) => PlayerDTO.fromEntity(e))
      }
      
    public async update(player_id: number, dto: PlayerDTO): Promise<PlayerDTO> {
        await this.repo.update(player_id, dto)
        const updatePlayer = await this.repo.findOne(player_id)
        if (!updatePlayer) {
            throw new NotFoundException(`Player #${player_id} not found`)
        }
        return updatePlayer
    }

    public async delete(@Param('player_id') player_id: number): Promise<void> {
        const player = await this.repo.findOne(player_id)
        if (!player) {
            throw new NotFoundException(`Player #${player_id} not found`)
        }
        this.repo.delete({player_id})
      }
}