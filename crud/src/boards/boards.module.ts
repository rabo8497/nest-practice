import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardProviders } from './dto/board.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardsController],
  providers: [
    ...BoardProviders,
    BoardsService,
  ]
})
export class BoardsModule {}
