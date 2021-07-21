import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should be get Value', () => {
    const userNotNull = controller.getUsers;
    expect(userNotNull.length).toEqual(1);
  });

  it('should be get ById 0 Bird', () => {
    const userNotNull = controller.getUserById('1');
    expect(userNotNull.name).toEqual('BirdX');
  });

  it('should be get ById 0 BirdS', () => {
    const userNotNull = controller.getUserById('1');
    expect(userNotNull).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });

  it('should be get ById Not Null', () => {
    const userNotNull = controller.getUserById('1');
    expect(userNotNull).not.toBeNull();
  });

  it('should be get ById Undefined', () => {
    const userNotNull = controller.getUserById(String('0'));
    expect(userNotNull).toBeUndefined();
  });
});
