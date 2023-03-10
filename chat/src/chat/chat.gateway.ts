import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
    @WebSocketServer()
    server: any;

    @SubscribeMessage('message')
    handleMessage(client: any, @MessageBody() payload: any): void {
        const nick = payload[0]
        const data = payload[1]
        this.server.emit('message', nick, data)
    }
}