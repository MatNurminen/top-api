import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClubDTO } from './club.dto';
import { ClubService } from './club.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Club')
@Controller('club')
export class ClubController {
    constructor(private serv: ClubService) {}

    @Get()
    public async findAllClubs(): Promise<ClubDTO[]> {
        return await this.serv.findAllClubs()
    }

    @Get(':club_id')
    public async findClubById(@Param('club_id') club_id: number): Promise<ClubDTO> {
        return await this.serv.findClubById(club_id)
    }

    @Post()
    public async post(@Body() dto: ClubDTO): Promise<ClubDTO> {
      return this.serv.create(dto)
    }

    @Patch(':club_id')
    public async update(@Param('club_id') club_id: number, @Body() dto: ClubDTO) {
      return `This action updates #${club_id} club`
    }

    @Delete(':club_id')
    public async remove(@Param('club_id') club_id: number): Promise<void> {
      this.serv.delete(club_id);
    }
}
