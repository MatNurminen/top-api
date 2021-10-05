import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreeAgentController } from './freeagent.controller';
import { PlayerEntity } from '../player/player.entity';
import { FreeAgentService } from './freeagent.service';
import { ChampionshipEntity } from '../championship/championship.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([PlayerEntity]),
        TypeOrmModule.forFeature([ChampionshipEntity])
    ],
    controllers: [FreeAgentController],
    providers: [FreeAgentService]
})

export class FreeAgentModule {}
