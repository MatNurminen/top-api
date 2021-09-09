import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeagueLogoDTO } from './league-logo.dto';
import { LeagueLogoEntity } from './league-logo.entity';

@Injectable()
export class LeagueLogoService {
    constructor(
        @InjectRepository(LeagueLogoEntity)
        private readonly repo: Repository<LeagueLogoEntity>
    ) {}

    public async findAllClubLogos(): Promise<LeagueLogoDTO[]> {
        return await this.repo.find()
        .then((clubLogos)=>clubLogos.map((e)=>LeagueLogoDTO.fromEntity(e)))
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

    public async create(dto: LeagueLogoDTO): Promise<LeagueLogoDTO> {
        return this.repo
          .save(LeagueLogoDTO.toEntity(dto))
          .then((e) => LeagueLogoDTO.fromEntity(e))
      }
      
    public async delete(@Param('league_logo_id') league_logo_id: number): Promise<void> {
        const leagueLogo = await this.repo.findOne(league_logo_id)
        if (!leagueLogo) {
            throw new NotFoundException(`LeagueLogo #${league_logo_id} not found`)
        }
        this.repo.delete({league_logo_id})
      }
}