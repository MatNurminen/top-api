import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeasonDTO } from './season.dto';
import { SeasonEntity } from './season.entity';

@Injectable()
export class SeasonService {
    constructor(
        @InjectRepository(SeasonEntity)
        private readonly repo: Repository<SeasonEntity>
    ) {}

    public async findAllSeasons(): Promise<SeasonDTO[]> {
        return await this.repo.find()
        .then((seasons)=>seasons.map((e)=>SeasonDTO.fromEntity(e)))
    }

    public async findSeasonById(season_id: number): Promise<SeasonDTO> {
        const season = await this.repo.findOne(season_id)
        if (!season) {
            throw new NotFoundException(`Season #${season_id} not found`)
        }
        return season
    }

    public async create(dto: SeasonDTO): Promise<SeasonDTO> {
        return this.repo
          .save(SeasonDTO.toEntity(dto))
          .then((e) => SeasonDTO.fromEntity(e))
      }
      
    public async delete(@Param('season_id') season_id: number): Promise<void> {
        const season = await this.repo.findOne(season_id)
        if (!season) {
            throw new NotFoundException(`Season #${season_id} not found`)
        }
        this.repo.delete({season_id})
      }
}