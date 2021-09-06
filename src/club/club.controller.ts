import { Controller, Get } from '@nestjs/common';
import { ClubDTO } from './club.dto';
import { ClubService } from './club.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('club')
@Controller('club')
export class ClubController {
    constructor(private serv: ClubService) {}

    @Get()
    public async findAllClubs(): Promise<ClubDTO[]> {
        return await this.serv.findAllClubs()
    }
}
