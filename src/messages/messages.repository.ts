import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: number) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return Object.values(messages);
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const keyCount = Object.keys(messages).length;
    const id = keyCount + 1;

    const message = { id, content };
    messages[id] = message;

    await writeFile('messages.json', JSON.stringify(messages, null, 2));

    return message;
  }
}