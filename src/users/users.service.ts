import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuid } from 'uuid'
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
 export class UsersService {
  private readonly users: CreateUserDto[] = []

  create(createUserDto: CreateUserDto) {
    createUserDto.id = uuid();
    createUserDto.password = bcryptHashSync(createUserDto.password, 10);
    this.users.push(createUserDto)
    console.log(this.users)
  }

  findByUserName(username: string): CreateUserDto | null{
    return this.users.find(user => user.username === username)
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
