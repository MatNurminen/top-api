import { Injectable, NotFoundException, Param } from '@nestjs/common';
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

    public async findClubById(club_id: number): Promise<ClubDTO> {
        const club = await this.repo.findOne(club_id)
        if (!club) {
            throw new NotFoundException(`Club #${club_id} not found`)
        }
        return club
    }

    public async create(dto: ClubDTO): Promise<ClubDTO> {
        return this.repo
          .save(ClubDTO.toEntity(dto))
          .then((e) => ClubDTO.fromEntity(e))
      }
      
    public async delete(@Param('club_id') club_id: number): Promise<void> {
        const club = await this.repo.findOne(club_id)
        if (!club) {
            throw new NotFoundException(`Club #${club_id} not found`)
        }
        this.repo.delete({club_id})
      }
}