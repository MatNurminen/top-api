import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampEntity } from './champ.entity';
import { ChampController } from './champ.controller';
import { ChampService } from './champ.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChampEntity])
  ],
  controllers: [ChampController],
  providers: [ChampService]
})
export class ChampModule {}
