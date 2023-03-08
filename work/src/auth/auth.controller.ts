import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/signup')
    @Render('signup')
    getSignupPage() {
        return 0
    }

    @Post('/signup')
    signUp(@Body() authCredentialDto: AuthCredentialDto) : Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }
}
