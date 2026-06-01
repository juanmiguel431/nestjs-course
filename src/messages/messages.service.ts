import { MessagesRepository} from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messagesRepository: MessagesRepository;

  constructor(repo: MessagesRepository) {
    this.messagesRepository = repo;
  }

  findOne(id: number) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}