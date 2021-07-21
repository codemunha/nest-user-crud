import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  // eslint-disable-next-line prettier/prettier
  Query
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/entities/user.entities';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User, description: 'the user' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    // TODO: auto parse ID
    const user = this.userService.findById(Number(id));
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @ApiOkResponse({ type: User, description: 'the user' })
  @ApiNotFoundResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }
}
