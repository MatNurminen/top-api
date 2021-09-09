import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChampDTO } from './champ.dto';
import { ChampService } from './champ.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Champ')
@Controller('champ')
export class ChampController {
    constructor(private serv: ChampService) {}

    @Get()
    public async findAllChamps(): Promise<ChampDTO[]> {
        return await this.serv.findAllChamps()
    }

    @Post()
    public async post(@Body() dto: ChampDTO): Promise<ChampDTO> {
      return this.serv.create(dto)
    }

    @Patch(':champ_id')
    public async update(@Param('champ_id') champ_id: number, @Body() dto: ChampDTO) {
      return `This action updates #${champ_id} champ`
    }

    @Delete(':champ_id')
    public async remove(@Param('champ_id') champ_id: number): Promise<void> {
      this.serv.delete(champ_id);
    }
}
