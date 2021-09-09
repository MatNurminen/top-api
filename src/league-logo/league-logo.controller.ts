import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LeagueLogoDTO } from './league-logo.dto';
import { LeagueLogoService } from './league-logo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('LeagueLogo')
@Controller('league-logo')
export class LeagueLogoController {
    constructor(private serv: LeagueLogoService) {}

    @Get()
    public async findAllLeagueLogos(): Promise<LeagueLogoDTO[]> {
        return await this.serv.findAllClubLogos()
    }

    // @Get(':club_id')
    // public async findClubById(@Param('club_id') club_id: number): Promise<ClubDTO> {
    //     return await this.serv.findClubById(club_id)
    // }

    @Post()
    public async post(@Body() dto: LeagueLogoDTO): Promise<LeagueLogoDTO> {
      return this.serv.create(dto)
    }

    @Patch(':league_logo_id')
    public async update(@Param('league_logo_id') league_logo_id: number, @Body() dto: LeagueLogoDTO) {
      return `This action updates #${league_logo_id} club logo`
    }

    @Delete(':league_logo_id')
    public async remove(@Param('league_logo_id') league_logo_id: number): Promise<void> {
      this.serv.delete(league_logo_id);
    }
}
