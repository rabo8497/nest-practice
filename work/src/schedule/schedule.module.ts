import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/db/database.module';
import { ScheduleController } from './schedule.controller';
import { scheduleProviders } from './schedule.providers';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
  ],
  controllers: [ScheduleController],
  providers: [
    ...scheduleProviders,
    ScheduleService
  ]
})
export class ScheduleModule {}
