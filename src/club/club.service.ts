import { HttpStatus, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ClubDTO } from './dto/club.dto';
import { ClubEntity } from './club.entity';
//import { CreateClubDTO } from './dto/create-club.dto';

@Injectable()
export class ClubService {
    constructor(
        @InjectRepository(ClubEntity)
        private readonly repo: Repository<ClubEntity>
    ) {}

    public async findAllClubs(): Promise<ClubDTO[]> {
        return await this.repo.find()
        //.then((clubs)=>clubs.map((e)=>ClubDTO.fromEntity(e)))
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

    public async update(club_id: number, dto: ClubDTO): Promise<ClubDTO> {
        return this.repo
          .update(club_id, ClubDTO.toEntity(dto))
          .then((e: any) => ClubDTO.fromEntity(e))
      }
      
    public async delete(@Param('club_id') club_id: number): Promise<ClubDTO> {
        const club = await this.repo.findOne(club_id)
        if (!club) {
            throw new NotFoundException(`Club #${club_id} not found`)
        }
        
        this.repo.delete({club_id})
        return club
      }
}