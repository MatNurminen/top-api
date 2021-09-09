import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueLogoController } from './league-logo.controller';
import { LeagueLogoEntity } from './league-logo.entity';
import { LeagueLogoService } from './league-logo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([LeagueLogoEntity])
    ],
    controllers: [LeagueLogoController],
    providers: [LeagueLogoService]
})

export class LeagueLogoModule {}
