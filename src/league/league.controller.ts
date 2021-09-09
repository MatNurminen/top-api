import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LeagueDTO } from './league.dto';
import { LeagueService } from './league.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('League')
@Controller('league')
export class LeagueController {
    constructor(private serv: LeagueService) {}

    @Get()
    public async findAllLeagues(): Promise<LeagueDTO[]> {
        return await this.serv.findAllLeagues()
    }

    @Get(':league_id')
    public async findLeagueById(@Param('league_id') league_id: number): Promise<LeagueDTO> {
        return await this.serv.findLeagueById(league_id)
    }

    @Post()
    public async post(@Body() dto: LeagueDTO): Promise<LeagueDTO> {
      return this.serv.create(dto)
    }

    @Patch(':league_id')
    public async update(@Param('league_id') league_id: number, @Body() dto: LeagueDTO) {
      return `This action updates #${league_id} league`
    }

    @Delete(':league_id')
    public async remove(@Param('league_id') league_id: number): Promise<void> {
      this.serv.delete(league_id);
    }
}
