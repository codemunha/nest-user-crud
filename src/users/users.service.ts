import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 1, name: 'BirdX' }];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id == userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}