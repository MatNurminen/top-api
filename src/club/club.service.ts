import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubDTO } from './club.dto';
import { ClubEntity } from './club.entity';

@Injectable()
export class ClubService {
    constructor(
        @InjectRepository(ClubEntity)
        private readonly repo: Repository<ClubEntity>
    ) {}

    public async findAllClubs(): Promise<ClubDTO[]> {
        return await this.repo.find()
        .then((clubs)=>clubs.map((e)=>ClubDTO.fromEntity(e)))
    }
}