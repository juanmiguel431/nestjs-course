import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, content: 'Hello' },
      { id: 2, content: 'World!' },
    ];
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return { id: 3, content: body.content };
  }

  @Get(':id')
  getMessage(@Param('id') id: number) {
    console.log(`Retrieving message with ID: ${id}`);

    return { id: id, content: 'Hello World' };
  }
}
