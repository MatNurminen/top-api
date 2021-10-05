import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClubLogoDTO } from './club-logo.dto';
import { ClubLogoService } from './club-logo.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ClubLogo')
@Controller('club-logo')
export class ClubLogoController {
    constructor(private serv: ClubLogoService) {}

    @Get()
    @ApiOperation({ summary: 'Get all club logos' })
    @ApiResponse({ status: 200, 
      description: 'Get all club logos', 
      type: [ClubLogoDTO]})
    public async findAllClubLogos(@Query() query: any): Promise<ClubLogoDTO[]> {
      if(query && Object.keys(query).length === 0) {
        return await this.serv.findAllClubLogos()
      } else {
        return await this.serv.findClubLogoByQuery(query)
      }   
    }

    @Get(':club_id')
    @ApiOperation({ summary: 'Get logos by club id' })
    @ApiResponse({ status: 200, 
      description: 'Get logos by club id', 
      type: [ClubLogoDTO]})
    public async findClubLogoByClub(@Param('club_id') club_id: number): Promise<ClubLogoDTO[]> {
        return await this.serv.findClubLogoByClub(club_id)
    }

    @Post()
    @ApiOperation({ summary: 'Create club logo' })
    @ApiResponse({ status: 201, 
      description: 'The club logo has been successfully created.', 
      type: ClubLogoDTO})
    public async post(@Body() dto: ClubLogoDTO): Promise<ClubLogoDTO> {
      return this.serv.create(dto)
    }

    @Patch(':club_logo_id')
    @ApiOperation({ summary: 'Update club logo' })
    @ApiResponse({ status: 200, 
      description: 'The club logo has been successfully updated.', 
      type: ClubLogoDTO})
    public async update(@Param('club_logo_id') club_logo_id: number, @Body() dto: ClubLogoDTO) {
      return `This action updates #${club_logo_id} club logo`
    }

    @Delete(':club_logo_id')
    @ApiOperation({ summary: 'Delete club logo' })
    @ApiResponse({ status: 200, 
      description: 'The club logo has been successfully deleted.', 
      type: ClubLogoDTO})
    public async remove(@Param('club_logo_id') club_logo_id: number): Promise<void> {
      this.serv.delete(club_logo_id);
    }
}
