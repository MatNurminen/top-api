import { Controller, Get, Query } from '@nestjs/common';
import { FreeAgentService } from './freeagent.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FreeAgentDTO } from './freeagent.dto';

@ApiTags('FreeAgent')
@Controller('freeagent')
export class FreeAgentController {
    constructor(private serv: FreeAgentService) {}

    @Get()
    @ApiOperation({ summary: 'Get free agents by country and season' })
    @ApiResponse({ status: 200, 
      description: 'Get free agents by country and season', 
      type: [FreeAgentDTO]})
    @ApiQuery({ name: 'season', type: 'number' })
    @ApiQuery({ name: 'country_id', type: 'number' })   
    public async findAllChamionships(@Query() query: any): Promise<FreeAgentDTO[]> {
        return await this.serv.findFreeAgents(query)
    }
}
