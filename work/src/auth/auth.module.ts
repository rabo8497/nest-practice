import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/db/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProviders } from './user.providers';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'Secret',
      signOptions: {
        expiresIn: 3600 
      }
    }),
    DatabaseModule
  ],
  controllers: [AuthController],
  providers: [
    ...userProviders,
    AuthService,
  ]
})
export class AuthModule {}
