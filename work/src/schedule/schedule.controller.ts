import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import User from 'src/auth/user.entity';
import { ScheCredentialDto } from './dto/sche-credential.dto';
import Sche from './schedule.entity';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
    
    constructor(private scheduleService: ScheduleService) {}
    
    @UseGuards(AuthGuard('jwt'))
    @Get('/mine')
    getAuthSche(@GetUser() user: User): Promise<Sche[]> {
        return this.scheduleService.getAuthSche(user)
    }

    @Get()
    getAllSche(): Promise<Sche[]> {
        return this.scheduleService.getAllSche()
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createSche(@Body() scheCredentialDto: ScheCredentialDto, @GetUser() user:User) {
        return this.scheduleService.createSche(scheCredentialDto, user)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/username')
    findUserName(@GetUser() user:User): Promise<string> {
        return this.scheduleService.findUserName(user)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/userId')
    findUserId(@GetUser() user:User): Promise<number> {
        return this.scheduleService.findUserId(user)
    }

     @UseGuards(AuthGuard('jwt'))
     @Delete()
     deleteMySche(@GetUser() user:User): Promise<void> {
         return this.scheduleService.deleteMySche(user)
     }
}
