import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LeagueDTO } from './league.dto';
import { LeagueService } from './league.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('League')
@Controller('league')
export class LeagueController {
    constructor(private serv: LeagueService) {}

    @Get()
    @ApiResponse({ status: 200, 
      description: 'Get all leagues', 
      type: [LeagueDTO]})
    public async findAllLeagues(): Promise<LeagueDTO[]> {
        return await this.serv.findAllLeagues()
    }

    @Get(':league_id')
    @ApiResponse({ status: 200, 
      description: 'Get league by id', 
      type: LeagueDTO})
    public async findLeagueById(@Param('league_id') league_id: number): Promise<LeagueDTO> {
        return await this.serv.findLeagueById(league_id)
    }

    @Post()
    @ApiResponse({ status: 201, 
      description: 'The league has been successfully created.', 
      type: LeagueDTO})
    public async post(@Body() dto: LeagueDTO): Promise<LeagueDTO> {
      return this.serv.create(dto)
    }

    @Patch(':league_id')
    @ApiResponse({ status: 200, 
      description: 'The league has been successfully updated.', 
      type: LeagueDTO})
    public async update(@Param('league_id') league_id: number, @Body() dto: LeagueDTO) {
      return `This action updates #${league_id} league`
    }

    @Delete(':league_id')
    @ApiResponse({ status: 200, 
      description: 'The league has been successfully deleted.', 
      type: LeagueDTO})
    public async remove(@Param('league_id') league_id: number): Promise<void> {
      this.serv.delete(league_id);
    }
}
