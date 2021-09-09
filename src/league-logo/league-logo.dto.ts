import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { LeagueLogoEntity } from './league-logo.entity';

export class LeagueLogoDTO implements Readonly<LeagueLogoDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    league_logo_id: number

    @ApiProperty({ required: true })
    @IsInt()
    league_id: number

    @ApiProperty({ required: true })
    @IsInt()
    start_year: number

    @ApiPropertyOptional()
    @IsInt()
    end_year: number

    @ApiProperty({ required: true })
    @IsString()
    logo: string

    public static from(dto: Partial<LeagueLogoDTO>) {
        const leagueLogo = new LeagueLogoDTO()
        leagueLogo.league_logo_id = dto.league_logo_id
        leagueLogo.league_id = dto.league_id
        leagueLogo.start_year = dto.start_year
        leagueLogo.end_year = dto.end_year
        leagueLogo.logo = dto.logo
        return leagueLogo
      }

      public static fromEntity(entity: LeagueLogoEntity) {
        return this.from({
            league_logo_id: entity.league_logo_id,
            league_id: entity.league_id,
            start_year: entity.start_year,
            end_year: entity.end_year,
            logo: entity.logo
        })
    }

    public static toEntity(dto: Partial<LeagueLogoDTO>) {
        const leagueLogo = new LeagueLogoEntity()
        leagueLogo.league_logo_id = dto.league_logo_id
        leagueLogo.league_id = dto.league_id
        leagueLogo.start_year = dto.start_year
        leagueLogo.end_year = dto.end_year
        leagueLogo.logo = dto.logo
        return leagueLogo
      }
}
