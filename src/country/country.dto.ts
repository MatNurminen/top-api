import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { CountryEntity } from './country.entity';

export class CountryDTO implements Readonly<CountryDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    country_id: number

    @ApiProperty({ required: true })
    @IsString()
    name: string

    @ApiProperty({ required: true })
    @IsString()
    s_name: string;

    @ApiProperty({ required: true })
    @IsString()
    flag: string;

    @ApiProperty({ required: true })
    @IsString()
    jersey: string;

    public static from(dto: Partial<CountryDTO>) {
        const country = new CountryDTO()
        country.country_id = dto.country_id
        country.name = dto.name
        country.s_name = dto.s_name
        country.flag = dto.flag
        country.jersey = dto.jersey
        return country
      }

    public static fromEntity(entity: CountryEntity) {
        return this.from({
            country_id: entity.country_id,
            name: entity.name,
            s_name: entity.s_name,
            flag: entity.flag,
            jersey: entity.jersey
        })
    }

    public static toEntity(dto: Partial<CountryDTO>) {
        const country = new CountryEntity()
        country.country_id = dto.country_id
        country.name = dto.name
        country.s_name = dto.s_name
        country.flag = dto.flag
        country.jersey = dto.jersey
        return country
      }
}
