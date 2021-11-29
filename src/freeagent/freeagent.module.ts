import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreeAgentController } from './freeagent.controller';
import { FreeAgentService } from './freeagent.service';
import { FreeAgentEntity } from './freeagent.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([FreeAgentEntity])
    ],
    controllers: [FreeAgentController],
    providers: [FreeAgentService]
})

export class FreeAgentModule {}
