import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { SeasonEntity } from './season.entity';

export class SeasonDTO implements Readonly<SeasonDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    season_id: number

    @ApiPropertyOptional()
    @IsInt()
    year: number

    @ApiPropertyOptional()
    @IsString()
    season: string

    public static from(dto: Partial<SeasonDTO>) {
        const season = new SeasonDTO()
        season.season_id = dto.season_id
        season.year = dto.year
        season.season = dto.season
        return season
      }

      public static fromEntity(entity: SeasonEntity) {
        return this.from({
            season_id: entity.season_id,
            year: entity.year,
            season: entity.season
        })
    }

    public static toEntity(dto: Partial<SeasonDTO>) {
        const season = new SeasonEntity()
        season.season_id = dto.season_id
        season.year = dto.year
        season.season = dto.season
        return season
      }
}
