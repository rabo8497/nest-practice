import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import User from 'src/auth/user.entity';
import { ScheCredentialDto } from './dto/sche-credential.dto';
import Sche from './schedule.entity';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
@UseGuards(AuthGuard('jwt'))
export class ScheduleController {
    
    constructor(private scheduleService: ScheduleService) {}
    
    @Get()
    getAllSche(@GetUser() user: User): Promise<Sche[]> {
        return this.scheduleService.getAllSche(user)
    }

    @Post()
    createSche(@Body() scheCredentialDto: ScheCredentialDto, @GetUser() user:User) {
        return this.scheduleService.createSche(scheCredentialDto, user)
    }
}
