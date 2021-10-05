import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerDTO } from 'src/player/player.dto';
import { RosterService } from './roster.service';

@ApiTags('Roster')
@Controller('roster')
export class RosterController {
    constructor(private serv: RosterService) {}

    @Get()
    public async findRoster(@Query() query: any): Promise<PlayerDTO[]> {
        return await this.serv.findRoster(query)
    }
}