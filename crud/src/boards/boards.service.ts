import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardsService {
    constructor(
        @Inject('BOARD_REPOSITORY')
        private boardRepository: Repository<Board>
    ) {}

    async getAllBoards(): Promise<Board[]> {
        return this.boardRepository.find()
    }

    async createBoard(boardDto: BoardDto): Promise<Board> {
        const {title, description} = boardDto;
        const board = this.boardRepository.create({
            title,
            description
        })
        await this.boardRepository.save(board)
        return board
    }

    async findBoard(id: number): Promise<Board> {

        const found = await this.boardRepository.findOneBy({id}) 
        if (!found) {
            throw new NotFoundException("can't find")
        }
        return found
    }

    async deleteBoard(id: number): Promise<void> {
        const found = await this.findBoard(id)
        this.boardRepository.delete({id})
    }

    async update(id: number, boardDto: BoardDto): Promise<Board> {
        const found = await this.findBoard(id)
        const {title, description} = boardDto
        found.title = title
        found.description = description
        this.boardRepository.save(found)
        return found
    }
}
