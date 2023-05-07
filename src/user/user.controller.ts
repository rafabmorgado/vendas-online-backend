import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUSerDto } from 'src/dtos/createUser.dto';

@Controller('user')
export class UserController {
  //   @Get()
  //   async testeApi() {
  //     return JSON.stringify({ test: 'abc' });
  //   }

  @Post()
  async createUser(@Body() createUser: CreateUSerDto) {
    return createUser;
  }
}
