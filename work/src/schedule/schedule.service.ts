import { Inject, Injectable } from '@nestjs/common';
import User from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { ScheCredentialDto } from './dto/sche-credential.dto';
import Sche from './schedule.entity';

@Injectable()
export class ScheduleService {
    constructor(
        @Inject('SCHE_REPOSITORY')
        private scheRepository: Repository<Sche>,
    ) {}

    async createSche(scheCredentialDto: ScheCredentialDto, user:User): Promise<Sche> {
        const {timeBoxName, userName} = scheCredentialDto;
        const sche = this.scheRepository.create({
            timeBoxName,
            userName,
            user
        })
        await this.scheRepository.save(sche)
        return sche
    }

    async getAllSche(user: User): Promise<Sche[]> {
        const query = this.scheRepository.createQueryBuilder('sche');
        query.where('sche.userId = :userId', {userId: user.id})
        const sches = await query.getMany();
        return sches
    }
}
