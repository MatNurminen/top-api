import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { ClubEntity } from './club.entity';

export class ClubDTO implements Readonly<ClubDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    club_id: number

    @ApiProperty({ required: true })
    @IsInt()
    league_id: number

    @ApiProperty({ required: true })
    @IsString()
    club: string

    @ApiPropertyOptional()
    @IsInt()
    start_year: number

    @ApiPropertyOptional()
    @IsInt()
    end_year: number

    public static from(dto: Partial<ClubDTO>) {
        const club = new ClubDTO()
        club.club_id = dto.club_id
        club.league_id = dto.league_id
        club.club = dto.club
        club.start_year = dto.start_year
        club.end_year = dto.end_year
        return club
      }

      public static fromEntity(entity: ClubEntity) {
        return this.from({
            club_id: entity.club_id,
            league_id: entity.league_id,
            club: entity.club,
            start_year: entity.start_year,
            end_year: entity.end_year
        })
    }

    public static toEntity(dto: Partial<ClubDTO>) {
        const club = new ClubEntity()
        club.club_id = dto.club_id
        club.league_id = dto.league_id
        club.club = dto.club
        club.start_year = dto.start_year
        club.end_year = dto.end_year
        return club
      }
}
