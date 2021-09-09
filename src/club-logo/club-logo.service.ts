import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClubLogoDTO } from './club-logo.dto';
import { ClubLogoEntity } from './club-logo.entity';

@Injectable()
export class ClubLogoService {
    constructor(
        @InjectRepository(ClubLogoEntity)
        private readonly repo: Repository<ClubLogoEntity>
    ) {}

    public async findAllClubLogos(): Promise<ClubLogoDTO[]> {
        return await this.repo.find()
        .then((clubLogos)=>clubLogos.map((e)=>ClubLogoDTO.fromEntity(e)))
    }

    // public async findClubLogoByClub(club_id: number): Promise<ClubLogoDTO[]> {
    //     return await this.repo.findByIds(club_id)
    //     .then((clubLogosByClub)=>clubLogosByClub.map((e)=>ClubLogoDTO.fromEntity(e)))
    //     const clubLogo = await this.repo.findOne(club_id)
    //     if (!clubLogo) {
    //         throw new NotFoundException(`Club #${club_id} not found`)
    //     }
    //     return club
    // }

    public async create(dto: ClubLogoDTO): Promise<ClubLogoDTO> {
        return this.repo
          .save(ClubLogoDTO.toEntity(dto))
          .then((e) => ClubLogoDTO.fromEntity(e))
      }
      
    public async delete(@Param('club_logo_id') club_logo_id: number): Promise<void> {
        const clubLogo = await this.repo.findOne(club_logo_id)
        if (!clubLogo) {
            throw new NotFoundException(`ClubLogo #${club_logo_id} not found`)
        }
        this.repo.delete({club_logo_id})
      }
}