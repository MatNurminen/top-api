import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SeasonDTO } from './season.dto';
import { SeasonService } from './season.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Season')
@Controller('season')
export class SeasonController {
    constructor(private serv: SeasonService) {}

    @Get()
    public async findAllSeasons(): Promise<SeasonDTO[]> {
        return await this.serv.findAllSeasons()
    }

    @Get(':season_id')
    public async findSeasonById(@Param('season_id') season_id: number): Promise<SeasonDTO> {
        return await this.serv.findSeasonById(season_id)
    }

    @Post()
    public async post(@Body() dto: SeasonDTO): Promise<SeasonDTO> {
      return this.serv.create(dto)
    }

    @Patch(':season_id')
    public async update(@Param('season_id') season_id: number, @Body() dto: SeasonDTO) {
      return `This action updates #${season_id} season`
    }

    @Delete(':season_id')
    public async remove(@Param('season_id') season_id: number): Promise<void> {
      this.serv.delete(season_id);
    }
}
