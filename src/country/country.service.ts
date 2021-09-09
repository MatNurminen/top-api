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

    public async findCountryById(country_id: number) {
        const country = await this.repo.findOne(country_id)
        if (!country) {
            throw new NotFoundException(`Country #${country_id} not found`)
        }
        return country
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
