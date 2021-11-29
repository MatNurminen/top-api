import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryDTO } from './country.dto';
import { CountryEntity } from './country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryEntity)
        private readonly repo: Repository<CountryEntity>
    ) {}

    public async findAllCountries(): Promise<CountryDTO[]> {
        return await this.repo.find()
        .then((countries) => countries.map((e) => CountryDTO.fromEntity(e)))
    }

    public async findCountryById(query: any): Promise<CountryDTO> {
        const country = await this.repo
        .query('SELECT country.country_id, country."name", country.s_name, country."flag", country.jersey, \
        COUNT(*) AS "plsOfDb" FROM country INNER JOIN player \
        ON player.country_id = country.country_id WHERE country.country_id = $1 \
        GROUP BY country.country_id', [query])
        return country[0]
    }

    public async sqlCountryByLeague(season: number, league_id: number): Promise<any> {
        const countryByLeague = await this.repo
        .query('SELECT club.league_id, league.s_name, COUNT(*) AS "players" FROM club \
        INNER JOIN league ON league.league_id = club.league_id \
        INNER JOIN championship ON championship.club_id = club.club_id \
        INNER JOIN player ON championship.player_id = player.player_id \
        WHERE championship.season = $1 AND player.country_id = $2 \
        GROUP BY club.league_id, league.s_name ORDER BY players DESC', [season, league_id])
        return countryByLeague
    }

    public async create(dto: CountryDTO): Promise<CountryDTO> {
        return this.repo
          .save(CountryDTO.toEntity(dto))
          .then((e) => CountryDTO.fromEntity(e))
      }
      
    public async delete(@Param('conuntry_id') country_id: number): Promise<void> {
        const country = await this.repo.findOne(country_id)
        if (!country) {
            throw new NotFoundException(`Country #${country_id} not found`)
        }
        this.repo.delete({country_id})
      }
}
