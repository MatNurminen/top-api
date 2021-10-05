import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, IsUUID } from 'class-validator';
import { UserEntity } from './user.entity';

export class UserDTO implements Readonly<UserDTO> {
    @ApiProperty({ required: true })
    @IsUUID()
    user_id: number

    @ApiPropertyOptional()
    @IsString()
    login: string

    @ApiPropertyOptional()
    @IsString()
    password: string

    @ApiPropertyOptional()
    @IsInt()
    token: string

    @ApiPropertyOptional()
    @IsDate()
    token_exp: Date

    @ApiPropertyOptional()
    @IsInt()
    role_id: number

    public static from(dto: Partial<UserDTO>) {
        const user = new UserDTO()
        user.user_id = dto.user_id
        user.login = dto.login
        user.password = dto.password
        user.token = dto.token
        user.token_exp = dto.token_exp
        user.role_id = dto.role_id
        return user
      }

      public static fromEntity(entity: UserEntity) {
        return this.from({
            user_id: entity.user_id,
            login: entity.login,
            password: entity.password,
            token: entity.token,
            token_exp: entity.token_exp,
            role_id: entity.role_id
        })
    }

    public static toEntity(dto: Partial<UserDTO>) {
        const user = new UserDTO()
        user.user_id = dto.user_id
        user.login = dto.login
        user.password = dto.password
        user.token = dto.token
        user.token_exp = dto.token_exp
        user.role_id = dto.role_id
        return user
      }
}
