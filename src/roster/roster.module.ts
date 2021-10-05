import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from '../player/player.entity';
import { RosterController } from './roster.controller';
import { RosterService } from './roster.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerEntity])
  ],
  controllers: [RosterController],
  providers: [RosterService]
})
export class RosterModule {}
