import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RosterEntity } from './roster.entity';
import { RosterController } from './roster.controller';
import { RosterService } from './roster.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RosterEntity])
  ],
  controllers: [RosterController],
  providers: [RosterService]
})
export class RosterModule {}
