import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CountryDTO } from './country.dto';
import { CountryService } from './country.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Country')
@Controller('country')
export class CountryController {
    constructor(private readonly serv: CountryService) {}

    @Get()
    @ApiOperation({ summary: 'Get all countries' })
    @ApiResponse({ status: 200, 
      description: 'Get all countries', 
      type: [CountryDTO]})
    public async findAllCountries(): Promise<CountryDTO[]> {
        return await this.serv.findAllCountries()
    }

    @Get(':country_id')
    @ApiOperation({ summary: 'Get country by id' })
    @ApiResponse({ status: 200, 
      description: 'Get country by id', 
      type: CountryDTO})
    public async findCountryById(@Param('country_id') country_id: number): Promise<CountryDTO> {
        return await this.serv.findCountryById(country_id)
    }

    @Post()
    @ApiOperation({ summary: 'Create country' })
    @ApiResponse({ status: 201, 
      description: 'The country has been successfully created.', 
      type: CountryDTO})
    public async post(@Body() dto: CountryDTO): Promise<CountryDTO> {
      return this.serv.create(dto)
    }

    @Patch(':country_id')
    @ApiOperation({ summary: 'Update country' })
    @ApiResponse({ status: 200, 
      description: 'The country has been successfully updated.', 
      type: CountryDTO})
    public async update(@Param('country_id') country_id: number, @Body() dto: CountryDTO) {
      return `This action updates #${country_id} country`
    }

    @Delete(':country_id')
    @ApiOperation({ summary: 'Delete country' })
    @ApiResponse({ status: 200, 
      description: 'The country has been successfully deleted.', 
      type: CountryDTO})
    public async remove(@Param('country_id') country_id: number): Promise<void> {
      this.serv.delete(country_id);
    }
}
