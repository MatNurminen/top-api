import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { ChampionshipEntity } from './championship.entity';

export class ChampionshipDTO implements Readonly<ChampionshipDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    championship_id: number

    @ApiProperty({ required: true })
    @IsInt()
    season: number

    @ApiProperty({ required: true })
    @IsString()
    player_id: number

    @ApiProperty({ required: true })
    @IsString()
    club_id: number

    @ApiPropertyOptional()
    @IsInt()
    games: number

    @ApiPropertyOptional()
    @IsInt()
    goals: number

    public static from(dto: Partial<ChampionshipDTO>) {
        const championship = new ChampionshipDTO()
        championship.championship_id = dto.championship_id
        championship.season = dto.season
        championship.player_id = dto.player_id
        championship.club_id = dto.club_id
        championship.games = dto.games
        championship.goals = dto.goals
        return championship
      }

      public static fromEntity(entity: ChampionshipEntity) {
        return this.from({
            championship_id: entity.championship_id,
            season: entity.season,
            player_id: entity.player_id,
            club_id: entity.club_id,
            games: entity.games,
            goals: entity.goals
        })
    }

    public static toEntity(dto: Partial<ChampionshipDTO>) {
        const championship = new ChampionshipDTO()
        championship.championship_id = dto.championship_id
        championship.season = dto.season
        championship.player_id = dto.player_id
        championship.club_id = dto.club_id
        championship.games = dto.games
        championship.goals = dto.goals
        return championship
      }
}
