import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { ChampEntity } from './champ.entity';

export class ChampDTO implements Readonly<ChampDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    champ_id: number

    @ApiProperty({ required: true })
    @IsInt()
    season: number

    @ApiProperty({ required: true })
    @IsString()
    club_id: number

    @ApiProperty({ required: true })
    @IsString()
    league_id: number

    @ApiPropertyOptional()
    @IsInt()
    games: number

    @ApiPropertyOptional()
    @IsInt()
    wings: number

    @ApiPropertyOptional()
    @IsInt()
    ties: number

    @ApiPropertyOptional()
    @IsInt()
    losts: number

    @ApiPropertyOptional()
    @IsInt()
    gf: number

    @ApiPropertyOptional()
    @IsInt()
    ga: number

    @ApiPropertyOptional()
    @IsInt()
    postseason: string

    public static from(dto: Partial<ChampDTO>) {
        const champ = new ChampDTO()
        champ.champ_id = dto.champ_id
        champ.season = dto.season
        champ.club_id = dto.club_id
        champ.league_id = dto.league_id
        champ.games = dto.games
        champ.wings = dto.wings
        champ.ties = dto.ties
        champ.losts = dto.losts
        champ.ga = dto.ga
        champ.gf = dto.gf
        champ.postseason = dto.postseason
        return champ
      }

      public static fromEntity(entity: ChampEntity) {
        return this.from({
            champ_id: entity.champ_id,
            season: entity.season,
            club_id: entity.club_id,
            league_id: entity.league_id,
            games: entity.games,
            wings: entity.wings,
            ties: entity.ties,
            losts: entity.losts,
            ga: entity.ga,
            gf: entity.gf,
            postseason: entity.postseason
        })
    }

    public static toEntity(dto: Partial<ChampDTO>) {
        const champ = new ChampEntity()
        champ.champ_id = dto.champ_id
        champ.season = dto.season
        champ.club_id = dto.club_id
        champ.league_id = dto.league_id
        champ.games = dto.games
        champ.wings = dto.wings
        champ.ties = dto.ties
        champ.losts = dto.losts
        champ.ga = dto.ga
        champ.gf = dto.gf
        champ.postseason = dto.postseason
        return champ
      }
}
