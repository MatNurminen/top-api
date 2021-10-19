import { Injectable, NotFoundException, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, IsNull, Repository } from 'typeorm';
import { PlayerDTO } from '../player/player.dto';
import { PlayerEntity } from '../player/player.entity';
//import { FreeAgentDTO } from './freeagent.dto';
//import { FreeAgentEntity } from './freeagent.entity';
import { ChampionshipEntity } from '../championship/championship.entity';
import { ChampionshipDTO } from '../championship/championship.dto';

@Injectable()
export class FreeAgentService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly repo: Repository<PlayerEntity>,

        @InjectRepository(ChampionshipEntity)
        private readonly repoCh: Repository<ChampionshipEntity>
    ) {}

    // public async findAllFreeAgents(): Promise<PlayerDTO[]> {
    //     return await this.repo.find()
    //     .then((freeagents)=>freeagents.map((e)=>PlayerDTO.fromEntity(e)))
    // }

    public async findAllChamionships(query: any): Promise<ChampionshipDTO[]> {
        //return await this.repoCh.find()
        //.then((chs)=>chs.map((e)=>ChampionshipDTO.fromEntity(e)))
        const championshipsBySeason = await this.repoCh
        .query('SELECT * FROM player INNER JOIN country ON player.country_id = country.country_id \
             WHERE (start_year <= $1 AND (end_year >= $1 OR end_year ISNULL)) \
             AND player_id NOT IN ((SELECT player_id FROM championship WHERE season=$1)) \
             AND player.country_id = $2', [query.season, query.country_id])
             //.createQueryBuilder('cbs')
             //.select('player_id')
             //.where('cbs.season <= :season', {season: query.season})
             //.getRawMany()
        return championshipsBySeason
    }

    public async findFaQuery(query: any): Promise<PlayerDTO[]> {
        const seas = Number(query.season);
        
        const cmps = this.repoCh
        .createQueryBuilder('cbs')
        .select('cbs')
        
        //.addSelect('season')
        //.where('cbs.season != :season', { season: query.season })

        const freeAgents = await this.repo.createQueryBuilder('fa')
        .select('fa')
        .where('fa.player_id NOT IN (' + cmps.select('player_id')
        .getSql() + ')')
        
        .getRawMany()
        return freeAgents
    }

    /* public async findFaQuery(query: any): Promise<ChampionshipDTO[]> {
        const freeAgents = await this.repo.createQueryBuilder('fa')
        .select('fa')
        //.addSelect('ch.season', 'season')

        //.innerJoin('championship', 'ch', 'fa.player_id = ch.player_id')
        //.leftJoin('championship', 'ch', 'fa.player_id = ch.player_id')
        .innerJoin('championship', 'ch', 'fa.player_id = ch.player_id')
        
        //.where('fa.country_id = :country_id', {country_id: query.country_id})
        //.andWhere("ch.player_id IN (:...players)", { players: [3, 4300, 4303] })
        .andWhere("fa.player_id IN (:...fa)", { fa: [5762, 4300, 4303] })
        //.leftJoinAndMapOne('fa.championships', 'championship', 'championship.season != query.start_year')
        //.where('fa.end_year IS NULL')
        //.where('fa.country_id = :country_id', {country_id: query.country_id})
        //.andWhere('fa.start_year <= :season', {season: query.season})
        //.andWhere('fa.end_year >= :season', {season: query.season})
        //.where('ch.player_id != fa.player_id')
        //.andWhere('ch.season != :season', {season: query.season})
        //player_id NOT IN ((SELECT player_id FROM championship WHERE season=$1)) 
        
        .getRawMany()
        return freeAgents
        
        // it works !!!
        // return await this.repo.find({
        //     relations: ['championships'],
        //     where: { country_id: query.country_id },
        //   });
        
        
    } */
    
    // public async findAllFreeAgents(country_id: number): Promise<PlayerDTO[]> {
    //     //return await this.repo.find({relations: ['country']})
    //     //.then((freeagents)=>freeagents.map((e)=>PlayerDTO.fromEntity(e)))
    //     const freeAgents = await this.repo.createQueryBuilder('freeAgent')
    //     .where('freeAgent.country_id = :country_id', {country_id})
    //     .getMany()
    //     return freeAgents
    // }
}

// 'SELECT * FROM player INNER JOIN country ON player.country_id = country.country_id \
//       WHERE (start_year <= $1 AND (end_year >= $1 OR end_year ISNULL)) \
//       AND player_id NOT IN ((SELECT player_id FROM championship WHERE season=$1)) 
// AND player.country_id = $2',