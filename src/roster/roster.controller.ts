import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RosterDTO } from './roster.dto';
import { RosterService } from './roster.service';

@ApiTags('Roster')
@Controller('roster')
export class RosterController {
    constructor(private serv: RosterService) {}

    @Get()
    @ApiOperation({ summary: 'Get roster by league and season' })
    @ApiResponse({ status: 200, 
      description: 'Get roster by league and season', 
      type: [RosterDTO]})
    @ApiQuery({ name: 'season', type: 'number' })
    @ApiQuery({ name: 'league_id', type: 'number' })
    public async findRoster(@Query() query: any): Promise<RosterDTO[]> {
        return await this.serv.findRoster(query)
    }
}
