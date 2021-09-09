import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubLogoController } from './club-logo.controller';
import { ClubLogoEntity } from './club-logo.entity';
import { ClubLogoService } from './club-logo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ClubLogoEntity])
    ],
    controllers: [ClubLogoController],
    providers: [ClubLogoService]
})

export class ClubLogoModule {}
