import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { ClubLogoEntity } from './club-logo.entity';

export class ClubLogoDTO implements Readonly<ClubLogoDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    club_logo_id: number

    @ApiProperty({ required: true })
    @IsInt()
    club_id: number

    @ApiProperty({ required: true })
    @IsInt()
    start_year: number

    @ApiProperty({ required: true })
    @IsString()
    logo: string

    @ApiPropertyOptional()
    @IsInt()
    end_year: number

    public static from(dto: Partial<ClubLogoDTO>) {
        const clubLogo = new ClubLogoDTO()
        clubLogo.club_logo_id = dto.club_logo_id
        clubLogo.club_id = dto.club_id
        clubLogo.start_year = dto.start_year
        clubLogo.logo = dto.logo
        clubLogo.end_year = dto.end_year
        return clubLogo
      }

      public static fromEntity(entity: ClubLogoEntity) {
        return this.from({
            club_logo_id: entity.club_logo_id,
            club_id: entity.club_id,
            start_year: entity.start_year,
            logo: entity.logo,
            end_year: entity.end_year
        })
    }

    public static toEntity(dto: Partial<ClubLogoDTO>) {
        const clubLogo = new ClubLogoEntity()
        clubLogo.club_logo_id = dto.club_logo_id
        clubLogo.club_id = dto.club_id
        clubLogo.start_year = dto.start_year
        clubLogo.logo = dto.logo
        clubLogo.end_year = dto.end_year
        return clubLogo
      }
}
