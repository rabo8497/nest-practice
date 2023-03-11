import { ConflictException, Inject, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import User from './user.entity';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
        const {username, password, play1, play2, select1, select2, select3} = authCredentialDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log(play1)
        console.log(select1)
        const user = this.userRepository.create({
            username, 
            password: hashedPassword,
            play1,
            play2,
            select1,
            select2,
            select3,
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

    async signIn(authCredentialDto: AuthCredentialDto) {
        const {username, password} = authCredentialDto;
        const user = await this.userRepository.findOneBy({username})

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = {username};
            const accessToken = await this.jwtService.sign(payload);
            return {accessToken};
        } else {
            throw new UnauthorizedException('login failed')
        }
    }
}
