import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { LeagueEntity } from './league.entity';

export class LeagueDTO implements Readonly<LeagueDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    league_id: number

    @ApiProperty({ required: true })
    @IsString()
    name: string

    @ApiProperty({ required: true })
    @IsString()
    s_name: string;

    @ApiPropertyOptional()
    @IsInt()
    start_year: number;

    @ApiPropertyOptional()
    @IsInt()
    end_year: number;

    @ApiPropertyOptional()
    @IsString()
    color: string;

    public static from(dto: Partial<LeagueDTO>) {
        const league = new LeagueDTO()
        league.league_id = dto.league_id
        league.name = dto.name
        league.s_name = dto.s_name
        league.start_year = dto.start_year
        league.end_year = dto.end_year
        league.color = dto.color
        return league
      }

    public static fromEntity(entity: LeagueEntity) {
        return this.from({
            league_id: entity.league_id,
            name: entity.name,
            s_name: entity.s_name,
            start_year: entity.start_year,
            end_year: entity.end_year,
            color: entity.color
        })
    }

    public static toEntity(dto: Partial<LeagueDTO>) {
        const league = new LeagueEntity()
        league.league_id = dto.league_id
        league.name = dto.name
        league.s_name = dto.s_name
        league.start_year = dto.start_year
        league.end_year = dto.end_year
        league.color = dto.color
        return league
      }
}
