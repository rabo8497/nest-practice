import { Body, Controller, Get, Param, Patch, Post, Redirect, Render, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user.decorator';
import User from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/signup')
    @Render('signup')
    getSignupPage() {
        return 0 // render을 사용했기에 임의로 지정
    }

    @Get('/login')
    @Render('login')
    getLoginPage() {
        return 0
    }

    @Get('/myinfo')
    @Render('myinfo')
    getMyInfoPage() {
        return 0
    }

    @Get('/otherinfo/:id')
    @Render('otherinfo')
    getOtherPage() {
        return 0
    }

    @Get('/otherinfo/:id/status')
    getOtherInfoPage(@Param('id') id: number): Promise<string[]> {
        return this.authService.getOtherInfoPage(id)
    }

    @Post('/signup')
    signUp(@Body() authCredentialDto: AuthCredentialDto) : Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/signin')
    signIn(@Body() authCredentialDto: AuthCredentialDto): Promise<{accessToken:string}> {
        return this.authService.signIn(authCredentialDto)
    }

    @Patch('/:id')
    updateUserSelect(
        @Param('id') id: number,
        @Body() authCredentialDto: AuthCredentialDto
    ): Promise<User> {
        return this.authService.updateUserSelect(id, authCredentialDto)
    }

    @Post('/otherinfo')
    getIsOtherInfo(@Body() body: AuthCredentialDto): Promise<User> {
        return this.authService.getIsOtherInfo(body)
    }
}
