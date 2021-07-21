import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    console.log('getUserById: ', id);
    return this.userService.findById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }
}
