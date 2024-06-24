import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly UserRepository: Repository<UserEntity>,
    ) {}
        
    
    async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(CreateUserDto.password, saltOrRounds)

        return this.UserRepository.save({
            ...CreateUserDto,
            typeUser: 1,
            password: passwordHashed
        })
    }

    async getUserByIdUsingRelations(userId: number): Promise<UserEntity>{
        return this.UserRepository.findOne({
            where:{
                id: userId
            },
            relations: ['addresses']
        })
    }
    async getAllUsers(): Promise<UserEntity[]> {
        return this.UserRepository.find()
    }

    async findUserById(userId: number): Promise<UserEntity>{
        const user = await this.UserRepository.findOne({
            where:{
                id: userId
            }
        })

        if(!user){
            throw new NotFoundException(`UserId: ${userId} not found`)
        }

        return user
    }

}
