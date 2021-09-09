import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChampDTO } from './champ.dto';
import { ChampEntity } from './champ.entity';

@Injectable()
export class ChampService {
    constructor(
        @InjectRepository(ChampEntity)
        private readonly repo: Repository<ChampEntity>
    ) {}

    public async findAllChamps(): Promise<ChampDTO[]> {
        return await this.repo.find()
        .then((champs)=>champs.map((e)=>ChampDTO.fromEntity(e)))
    }

    public async create(dto: ChampDTO): Promise<ChampDTO> {
        return this.repo
          .save(ChampDTO.toEntity(dto))
          .then((e) => ChampDTO.fromEntity(e))
    }

    public async delete(@Param('champ_id') champ_id: number): Promise<void> {
        const champ = await this.repo.findOne(champ_id)
        if (!champ) {
            throw new NotFoundException(`Champ #${champ_id} not found`)
        }
        this.repo.delete({champ_id})
      }
}
