import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepository: typeof User) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto as any);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findByPk(id);
    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.findByPk(id);
    return user.destroy();
  }
}
