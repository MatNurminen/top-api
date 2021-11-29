import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FreeAgentDTO } from './freeagent.dto';
import { FreeAgentEntity } from './freeagent.entity';

@Injectable()
export class FreeAgentService {
    constructor(
        @InjectRepository(FreeAgentEntity)
        private readonly repo: Repository<FreeAgentEntity>
    ) {}

    public async findFreeAgents(query: any): Promise<FreeAgentDTO[]> {
        const freeAgents = await this.repo
        .query('SELECT * FROM player INNER JOIN country ON player.country_id = country.country_id \
             WHERE (start_year <= $1 AND (end_year >= $1 OR end_year ISNULL)) \
             AND player_id NOT IN ((SELECT player_id FROM championship WHERE season=$1)) \
             AND player.country_id = $2', [query.season, query.country_id])
        return freeAgents
    }
}
