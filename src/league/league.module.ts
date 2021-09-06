import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueEntity } from './league.entity';
import { LeagueController } from './league.controller';
import { LeagueService } from './league.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([LeagueEntity])
      ],
    controllers: [LeagueController],
    providers: [LeagueService]
})
export class LeagueModule {}
