import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service'
import { CountryModule } from './country/country.module';
import { LeagueModule } from './league/league.module';
import { ClubModule } from './club/club.module';
import { ChampModule } from './champ/champ.module';
import { ChampionshipModule } from './championship/championship.module';
import { ClubLogoModule } from './club-logo/club-logo.module';
import { LeagueLogoModule } from './league-logo/league-logo.module';
import { PlayerModule } from './player/player.module';
import { SeasonModule } from './season/season.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    //ConfigModule.forRoot({ isGlobal: true}),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: parseInt(<string>process.env.POSTGRES_PORT),
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DATABASE,
    //   autoLoadEntities: true,
    //   synchronize: false,
    // }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CountryModule,
    LeagueModule,
    ClubModule,
    ChampModule,
    ChampionshipModule,
    ClubLogoModule,
    LeagueLogoModule,
    PlayerModule,
    SeasonModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
