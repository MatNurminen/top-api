import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChampionshipDTO } from './championship.dto';
import { ChampionshipEntity } from './championship.entity';

@Injectable()
export class ChampionshipService {
    constructor(
        @InjectRepository(ChampionshipEntity)
        private readonly repo: Repository<ChampionshipEntity>
    ) {}

    public async findAllChampionships(): Promise<ChampionshipDTO[]> {
        return await this.repo.find()
        .then((championships)=>championships.map((e)=>ChampionshipDTO.fromEntity(e)))
    }

    public async create(dto: ChampionshipDTO): Promise<ChampionshipDTO> {
        return this.repo
          .save(ChampionshipDTO.toEntity(dto))
          .then((e) => ChampionshipDTO.fromEntity(e))
    }

    public async delete(@Param('championship_id') championship_id: number): Promise<void> {
        const championship = await this.repo.findOne(championship_id)
        if (!championship) {
            throw new NotFoundException(`Championship #${championship_id} not found`)
        }
        this.repo.delete({championship_id})
      }
}
