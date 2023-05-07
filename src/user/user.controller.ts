import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUSerDto } from 'src/user/dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  //   @Get()
  //   async testeApi() {
  //     return JSON.stringify({ test: 'abc' });
  //   }

  constructor(private readonly userService: UserService) {};

  @Post()
  async createUser(@Body() createUser: CreateUSerDto): Promise <User> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUsers(): Promise<User []> {
    return this.userService.getAllUser();
  }
}
