import { Injectable } from '@nestjs/common';
import { CreateUSerDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];
    
    async createUser(createUSerDto: CreateUSerDto): Promise<User> {

        const saltOrRounds = 10;
        const passwordHashed = await hash(createUSerDto.password, saltOrRounds);

        const user: User = {
            ...createUSerDto,
            id: this.users.length + 1,
            password: passwordHashed
        }

        this.users.push(user);

        return user;
    }

    async getAllUser(): Promise<User []> {
        return this.users;
    }


}
