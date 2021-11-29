import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class RosterDTO implements Readonly<RosterDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    championship_id: number

    @ApiPropertyOptional()
    @IsString()
    pos: string

    @ApiPropertyOptional()
    @IsInt()
    num: number

    @ApiPropertyOptional()
    @IsString()
    first_name: string

    @ApiPropertyOptional()
    @IsString()
    last_name: string

    @ApiPropertyOptional()
    @IsString()
    flag: string

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
    @IsInt()
    pos_num: number

    @ApiPropertyOptional()
    @IsInt()
    club_id: number

    @ApiPropertyOptional()
    @IsString()
    club: string

    @ApiPropertyOptional()
    @IsString()
    logo: string

    @ApiPropertyOptional()
    @IsString()
    league_logo: string

    @ApiPropertyOptional()
    @IsString()
    league_name: string

    @ApiPropertyOptional()
    @IsInt()
    pl_id: number

    @ApiPropertyOptional()
    @IsInt()
    age: number
}
