import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PlayerDTO } from '../player/player.dto';
import { FreeAgentService } from './freeagent.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ChampionshipDTO } from '../championship/championship.dto';

@ApiTags('FreeAgent')
@Controller('freeagent')
export class FreeAgentController {
    constructor(private serv: FreeAgentService) {}

    @Get()
    @ApiQuery({ name: 'season', type: 'number' })
    @ApiQuery({ name: 'country_id', type: 'number' })
    
    public async findAllChamionships(@Query() query: any): Promise<ChampionshipDTO[]> {
    //public async findFaQuery(@Query() query: any): Promise<PlayerDTO[]> {
      // if(query && Object.keys(query).length === 0) {
      //   return await this.serv.findAllFreeAgents()  
      // } else {
        return await this.serv.findAllChamionships(query)
        //return await this.serv.findFaQuery(query)
      //} 
    }
}
