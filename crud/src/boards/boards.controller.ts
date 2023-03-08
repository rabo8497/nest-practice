import { Body, Controller, Delete, Get, Param, Patch, Post, Render } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { BoardDto } from './dto/board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    @Render('index')
    getAllBoards(): Promise<Board[]> {
        return this.boardsService.getAllBoards()
    }

    @Post()
    createBoard(@Body() boardDto: BoardDto): Promise<Board> {
        return this.boardsService.createBoard(boardDto)
    }

    @Get('/:id')
    findBoard(@Param('id') id: number): Promise<Board> {
        console.log(id)
        return this.boardsService.findBoard(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: number): Promise<void> {
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/:id')
    update(@Param('id') id: number, @Body() boardDto: BoardDto) {
        return this.boardsService.update(id, boardDto)
    }
}
