import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonController } from './season.controller';
import { SeasonEntity } from './season.entity';
import { SeasonService } from './season.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([SeasonEntity])
    ],
    controllers: [SeasonController],
    providers: [SeasonService]
})

export class SeasonModule {}
