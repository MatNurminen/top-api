import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../player/player.entity';
import { PlayerDTO } from '../player/player.dto';

@Injectable()
export class RosterService {
    constructor(
        @InjectRepository(PlayerEntity)
        private readonly repo: Repository<PlayerEntity>
    ) {}

    public async findRoster(query: any): Promise<PlayerDTO[]> {
        const roster = await this.repo.createQueryBuilder('player')
        .select('player')
        //.innerJoinAndSelect('player.championships', 'championship')
        .addSelect('ch.season', 'ch_season')
        .addSelect('cl.club', 'cl_club')
        .addSelect('lg.league_id', 'lg_league_id')
        //.addSelect('cl_logo.logo', 'cl_logo')

        .innerJoin('championship', 'ch', 'player.player_id = ch.player_id')
        .innerJoin('club', 'cl', 'ch.club_id = cl.club_id')
        .innerJoin('league', 'lg', 'cl.league_id = lg.league_id')
        //.innerJoin('club_logo', 'cl_logo', 'cl.club_id = cl_logo.club_id')
        
        .where('ch.season = :season', {season: query.season})
        .andWhere('lg.league_id = :league_id', {league_id: query.league_id})
        //.andWhere('cl_logo.start_year <= :season', {season: query.season})
        //.andWhere('cl_logo.end_year >= :season', {season: query.season})
        .getRawMany()
        //.getMany()
        return roster
    }
}

// SELECT championship.championship_id, player.pos, player.num, player.first_name, player.last_name, country.flag, player.birth, \
//       player.height, player.weight, player.pos_num, club.club_id, club.club, club_logo.logo, league_logo.logo AS league_logo, league.name AS league_name, \
//       player.player_id AS pl_id, ($1 - player.birth) AS age \
//       FROM championship \
//       INNER JOIN player ON (championship.player_id = player.player_id) \
//       INNER JOIN club ON (championship.club_id = club.club_id) \
//       INNER JOIN league ON (club.league_id = league.league_id) \
//       INNER JOIN country ON (player.country_id = country.country_id) \
//       INNER JOIN club_logo ON (club.club_id = club_logo.club_id) \
//       INNER JOIN league_logo ON (league.league_id = league_logo.league_id) \
//       WHERE championship.season = $1 AND league.league_id = $2 \
//       AND club_logo.start_year <= $1 AND (club_logo.end_year >= $1 OR club_logo.end_year IS NULL) \
//       AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL) \
//       ORDER BY club.club, player.pos_num'
