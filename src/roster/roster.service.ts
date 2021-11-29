import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RosterEntity } from './roster.entity';
import { RosterDTO } from './roster.dto';

@Injectable()
export class RosterService {
    constructor(
        @InjectRepository(RosterEntity)
        private readonly repo: Repository<RosterEntity>
    ) {}

    public async findRoster(query: any): Promise<RosterDTO[]> {
        const roster = await this.repo
        .query('SELECT championship.championship_id, player.pos, player.num, player.first_name, player.last_name, \
            country.flag, player.birth, player.height, player.weight, player.pos_num, club.club_id, club.club, \
            club_logo.logo, league_logo.logo AS league_logo, league.name AS league_name, player.player_id AS pl_id, \
            ($1 - player.birth) AS age FROM championship \
            INNER JOIN player ON (championship.player_id = player.player_id) \
            INNER JOIN club ON (championship.club_id = club.club_id) \
            INNER JOIN league ON (club.league_id = league.league_id) \
            INNER JOIN country ON (player.country_id = country.country_id) \
            INNER JOIN club_logo ON (club.club_id = club_logo.club_id) \
            INNER JOIN league_logo ON (league.league_id = league_logo.league_id) \
            WHERE championship.season = $1 AND league.league_id = $2 \
            AND club_logo.start_year <= $1 AND (club_logo.end_year >= $1 OR club_logo.end_year IS NULL) \
            AND league_logo.start_year <= $1 AND (league_logo.end_year >= $1 OR league_logo.end_year IS NULL) \
            ORDER BY club.club, player.pos_num', [query.season, query.league_id])
        return roster
    }
}
