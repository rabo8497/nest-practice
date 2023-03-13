import { Controller, Get, Render } from '@nestjs/common';
import { SubscribeMessage } from '@nestjs/websockets';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Get()
    @Render('chat')
    getChatPage() {
        return 0;
    }
}
