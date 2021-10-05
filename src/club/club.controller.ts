import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClubDTO } from './club.dto';
import { ClubService } from './club.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Club')
@Controller('club')
export class ClubController {
    constructor(private serv: ClubService) {}

    @Get()
    @ApiOperation({ summary: 'Get all clubs' })
    @ApiResponse({ status: 200, 
      description: 'Get all clubs', 
      type: [ClubDTO]})
    public async findAllClubs(): Promise<ClubDTO[]> {
        return await this.serv.findAllClubs()
    }

    @Get(':club_id')
    @ApiOperation({ summary: 'Get club by id' })
    @ApiResponse({ status: 200, 
      description: 'Get club by id', 
      type: ClubDTO})
    public async findClubById(@Param('club_id') club_id: number): Promise<ClubDTO> {
        return await this.serv.findClubById(club_id)
    }

    @Post()
    @ApiOperation({ summary: 'Create club' })
    @ApiResponse({ status: 201, 
      description: 'The club has been successfully created.', 
      type: ClubDTO})
    public async post(@Body() dto: ClubDTO): Promise<ClubDTO> {
      return this.serv.create(dto)
    }

    @Patch(':club_id')
    @ApiOperation({ summary: 'Update club' })
    @ApiResponse({ status: 200, 
      description: 'The club has been successfully updated.', 
      type: ClubDTO})
    public async update(@Param('club_id') club_id: number, @Body() dto: ClubDTO) {
      return `This action updates #${club_id} club`
    }

    @Delete(':club_id')
    @ApiOperation({ summary: 'Delete club' })
    @ApiResponse({ status: 200, 
      description: 'The club has been successfully deleted.', 
      type: ClubDTO})
    public async remove(@Param('club_id') club_id: number): Promise<void> {
      this.serv.delete(club_id);
    }
}
