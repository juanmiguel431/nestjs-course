import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, content: 'Hello'},
      { id: 2, content: 'World!'},
    ];
  }

  @Post()
  createMessage(@Body() body: any) {
    return { id: 3, content: body.content};
  }

  @Get(':id')
  getMessage(@Param('id') id: number) {

    console.log(`Retrieving message with ID: ${id}`);

    return { id: id, content: 'Hello World'};
  }
}
