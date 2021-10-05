import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';
import { FreeAgentEntity } from './freeagent.entity';

export class FreeAgentDTO implements Readonly<FreeAgentDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    player_id: number

    @ApiPropertyOptional()
    @IsString()
    first_name: string

    @ApiPropertyOptional()
    @IsString()
    last_name: string

    @ApiPropertyOptional()
    @IsInt()
    num: number

    @ApiPropertyOptional()
    @IsString()
    pos: string

    @ApiPropertyOptional()
    @IsInt()
    country_id: number

    @ApiPropertyOptional()
    @IsInt()
    birth: number

    @ApiPropertyOptional()
    @IsInt()
    height: number

    @ApiPropertyOptional()
    @IsInt()
    weight: number

    @ApiPropertyOptional()
    @IsString()
    m: string

    @ApiPropertyOptional()
    @IsInt()
    pos_num: number

    @ApiPropertyOptional()
    @IsInt()
    start_year: number

    @ApiPropertyOptional()
    @IsInt()
    end_year: number

    public static from(dto: Partial<FreeAgentDTO>) {
        const player = new FreeAgentDTO()
        player.player_id = dto.player_id
        player.first_name = dto.first_name
        player.last_name = dto.last_name
        player.num = dto.num
        player.pos = dto.pos
        player.country_id = dto.country_id
        player.birth = dto.birth
        player.height = dto.height
        player.weight = dto.weight
        player.m = dto.m
        player.pos_num = dto.pos_num
        player.start_year = dto.start_year
        player.end_year = dto.end_year
        return player
      }

      public static fromEntity(entity: FreeAgentEntity) {
        return this.from({
            player_id: entity.player_id,
            first_name: entity.first_name,
            last_name: entity.last_name,
            num: entity.num,
            pos: entity.pos,
            country_id: entity.country_id,
            birth: entity.birth,
            height: entity.height,
            weight: entity.weight,
            m: entity.m,
            pos_num: entity.pos_num,
            start_year: entity.start_year,
            end_year: entity.end_year,
        })
    }

    public static toEntity(dto: Partial<FreeAgentDTO>) {
        const player = new FreeAgentDTO()
        player.player_id = dto.player_id
        player.first_name = dto.first_name
        player.last_name = dto.last_name
        player.num = dto.num
        player.pos = dto.pos
        player.country_id = dto.country_id
        player.birth = dto.birth
        player.height = dto.height
        player.weight = dto.weight
        player.m = dto.m
        player.pos_num = dto.pos_num
        player.start_year = dto.start_year
        player.end_year = dto.end_year
        return player
      }
}
