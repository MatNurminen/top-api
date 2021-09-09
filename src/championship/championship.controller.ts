import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChampionshipDTO } from './championship.dto';
import { ChampionshipService } from './championship.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Championship')
@Controller('championship')
export class ChampionshipController {
    constructor(private serv: ChampionshipService) {}

    @Get()
    public async findAllChampionships(): Promise<ChampionshipDTO[]> {
        return await this.serv.findAllChampionships()
    }

    @Post()
    public async post(@Body() dto: ChampionshipDTO): Promise<ChampionshipDTO> {
      return this.serv.create(dto)
    }

    @Patch(':championship_id')
    public async update(@Param('championship_id') championship_id: number, @Body() dto: ChampionshipDTO) {
      return `This action updates #${championship_id} championship`
    }

    @Delete(':championship_id')
    public async remove(@Param('championship_id') championship_id: number): Promise<void> {
      this.serv.delete(championship_id);
    }
}
