import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClubLogoDTO } from './club-logo.dto';
import { ClubLogoService } from './club-logo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ClubLogo')
@Controller('club-logo')
export class ClubLogoController {
    constructor(private serv: ClubLogoService) {}

    @Get()
    public async findAllClubLogos(): Promise<ClubLogoDTO[]> {
        return await this.serv.findAllClubLogos()
    }

    // @Get(':club_id')
    // public async findClubById(@Param('club_id') club_id: number): Promise<ClubDTO> {
    //     return await this.serv.findClubById(club_id)
    // }

    @Post()
    public async post(@Body() dto: ClubLogoDTO): Promise<ClubLogoDTO> {
      return this.serv.create(dto)
    }

    @Patch(':club_logo_id')
    public async update(@Param('club_logo_id') club_logo_id: number, @Body() dto: ClubLogoDTO) {
      return `This action updates #${club_logo_id} club logo`
    }

    @Delete(':club_logo_id')
    public async remove(@Param('club_logo_id') club_logo_id: number): Promise<void> {
      this.serv.delete(club_logo_id);
    }
}
