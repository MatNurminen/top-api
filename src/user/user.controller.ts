import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private serv: UserService) {}

    @Get()
    public async findAllUsers(): Promise<UserDTO[]> {
        return await this.serv.findAllUsers()
    }

    @Get(':user_id')
    public async findUserById(@Param('user_id') user_id: number): Promise<UserDTO> {
        return await this.serv.findUserById(user_id)
    }

    @Post()
    public async post(@Body() dto: UserDTO): Promise<UserDTO> {
      return this.serv.create(dto)
    }

    @Patch(':user_id')
    public async update(@Param('user_id') user_id: number, @Body() dto: UserDTO) {
      return `This action updates #${user_id} user`
    }

    @Delete(':user_id')
    public async remove(@Param('user_id') user_id: number): Promise<void> {
      this.serv.delete(user_id);
    }
}
