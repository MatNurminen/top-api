import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChampDTO } from './champ.dto';
import { ChampService } from './champ.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Champ')
@Controller('champ')
export class ChampController {
    constructor(private serv: ChampService) {}

    @Get()
    @ApiOperation({ summary: 'Get all champs' })
    @ApiResponse({ status: 200, 
      description: 'Get all champs', 
      type: [ChampDTO]})
    public async findAllChamps(): Promise<ChampDTO[]> {
        return await this.serv.findAllChamps()
    }

    @Post()
    @ApiOperation({ summary: 'Create champ' })
    @ApiResponse({ status: 201, 
      description: 'The champ has been successfully created.', 
      type: ChampDTO})
    public async post(@Body() dto: ChampDTO): Promise<ChampDTO> {
      return this.serv.create(dto)
    }

    @Patch(':champ_id')
    @ApiOperation({ summary: 'Update champ' })
    @ApiResponse({ status: 200, 
      description: 'The champ has been successfully updated.', 
      type: ChampDTO})
    public async update(@Param('champ_id') champ_id: number, @Body() dto: ChampDTO) {
      return `This action updates #${champ_id} champ`
    }

    @Delete(':champ_id')
    @ApiOperation({ summary: 'Delete champ' })
    @ApiResponse({ status: 200, 
      description: 'The champ has been successfully deleted.', 
      type: ChampDTO})
    public async remove(@Param('champ_id') champ_id: number): Promise<void> {
      this.serv.delete(champ_id);
    }
}
