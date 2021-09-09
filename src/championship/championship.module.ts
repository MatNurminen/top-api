import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionshipEntity } from './championship.entity';
import { ChampionshipController } from './championship.controller';
import { ChampionshipService } from './championship.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ChampionshipEntity])
    ],
    controllers: [ChampionshipController],
    providers: [ChampionshipService]
})
export class ChampionshipModule {}
