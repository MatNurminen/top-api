import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayerDTO } from './player.dto';
import { PlayerService } from './player.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Player')
@Controller('player')
export class PlayerController {
    constructor(private serv: PlayerService) {}

    @Get()
    public async findAllPlayers(): Promise<PlayerDTO[]> {
        return await this.serv.findAllPlayers()
    }

    @Get(':player_id')
    public async findPlayerById(@Param('player_id') player_id: number): Promise<PlayerDTO> {
        return await this.serv.findPlayerById(player_id)
    }

    @Post()
    public async post(@Body() dto: PlayerDTO): Promise<PlayerDTO> {
      return this.serv.create(dto)
    }

    @Patch(':player_id')
    public async update(@Param('player_id') player_id: number, @Body() dto: PlayerDTO) {
      return `This action updates #${player_id} player`
    }

    @Delete(':player_id')
    public async remove(@Param('player_id') player_id: number): Promise<void> {
      this.serv.delete(player_id);
    }
}
