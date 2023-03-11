import { Body, Controller, Get, Param, Patch, Post, Redirect, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import User from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/signup')
    @Render('signup')
    getSignupPage() {
        return 0
    }

    @Get('/login')
    @Render('login')
    getLoginPage() {
        return 0
    }

    @Get('/myinfo')
    @Render('myinfo')
    getInfoPage() {
        return 0
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
}
