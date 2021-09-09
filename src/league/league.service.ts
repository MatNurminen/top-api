import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeagueDTO } from './league.dto';
import { LeagueEntity } from './league.entity';

@Injectable()
export class LeagueService {
    constructor(
        @InjectRepository(LeagueEntity)
        private readonly repo: Repository<LeagueEntity>
    ) {}

    public async findAllLeagues(): Promise<LeagueDTO[]> {
        return await this.repo.find()
        .then((countries)=>countries.map((e)=>LeagueDTO.fromEntity(e)))
    }

    public async findLeagueById(league_id: number) {
        const league = await this.repo.findOne(league_id)
        if (!league) {
            throw new NotFoundException(`League #${league_id} not found`)
        }
        return league
    }

    public async create(dto: LeagueDTO): Promise<LeagueDTO> {
        return this.repo
          .save(LeagueDTO.toEntity(dto))
          .then((e) => LeagueDTO.fromEntity(e))
      }

      public async delete(@Param('league_id') league_id: number): Promise<void> {
        const league = await this.repo.findOne(league_id)
        if (!league) {
            throw new NotFoundException(`League #${league_id} not found`)
        }
        this.repo.delete({league_id})
      }  
}
