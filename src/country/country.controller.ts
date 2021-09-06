import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CountryDTO } from './country.dto';
import { CountryService } from './country.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('country')
@Controller('country')
export class CountryController {
    constructor(private serv: CountryService) {}

    @Get()
    public async findAllCountries(): Promise<CountryDTO[]> {
        return await this.serv.findAllCountries()
    }

    @Get(':country_id')
    public async findCountryById(@Param('country_id') country_id: number): Promise<CountryDTO> {
        return await this.serv.findCountryById(country_id)
    }

    @Post()
    public async post(@Body() dto: CountryDTO): Promise<CountryDTO> {
      return this.serv.create(dto)
    }

    @Patch(':country_id')
    public async update(@Param('country_id') country_id: number, @Body() dto: CountryDTO) {
      return `This action updates #${country_id} country`
    }

    @Delete(':country_id')
    public async remove(@Param('country_id') country_id: number): Promise<void> {
      this.serv.delete(country_id);
    }
}
