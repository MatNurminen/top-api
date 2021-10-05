import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChampionshipDTO } from './championship.dto';
import { ChampionshipService } from './championship.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Championship')
@Controller('championship')
export class ChampionshipController {
    constructor(private serv: ChampionshipService) {}

    @Get()
    @ApiOperation({ summary: 'Get all championships' })
    @ApiResponse({ status: 200, 
      description: 'Get all championships', 
      type: [ChampionshipDTO]})
    public async findAllChampionships(): Promise<ChampionshipDTO[]> {
        return await this.serv.findAllChampionships()
    }

    @Post()
    @ApiOperation({ summary: 'Create championship' })
    @ApiResponse({ status: 201, 
      description: 'The championship has been successfully created.', 
      type: ChampionshipDTO})
    public async post(@Body() dto: ChampionshipDTO): Promise<ChampionshipDTO> {
      return this.serv.create(dto)
    }

    @Patch(':championship_id')
    @ApiOperation({ summary: 'Update championship' })
    @ApiResponse({ status: 200, 
      description: 'The championship has been successfully updated.', 
      type: ChampionshipDTO})
    public async update(@Param('championship_id') championship_id: number, @Body() dto: ChampionshipDTO) {
      return `This action updates #${championship_id} championship`
    }

    @Delete(':championship_id')
    @ApiOperation({ summary: 'Delete championship' })
    @ApiResponse({ status: 200, 
      description: 'The championship has been successfully deleted.', 
      type: ChampionshipDTO})
    public async remove(@Param('championship_id') championship_id: number): Promise<void> {
      this.serv.delete(championship_id);
    }
}
