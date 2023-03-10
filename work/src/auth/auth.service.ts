import { ConflictException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import User from './user.entity';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
        const {username, password, play1, play2} = authCredentialDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = this.userRepository.create({
            username, 
            password: hashedPassword,
            play1,
            play2
        });

        try {
            await this.userRepository.save(user)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Existing user name')
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
