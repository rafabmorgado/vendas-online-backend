import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUSerDto } from 'src/user/dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
    //   @Get()
    //   async testeApi() {
    //     return JSON.stringify({ test: 'abc' });
    //   }

    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUser: CreateUSerDto): Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUser();
    }
}
