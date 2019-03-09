import { MessagePayload } from '@interfaces/MessagePayload';
import {DataService} from '../services/DataService';

export class MessageSocketController {
  private dataService: DataService = new DataService();
  
  private notifyClient(): void {
    global.io.emit('server.messages', this.dataService.getAll('messages'));
  }
  
  public update(message: MessagePayload) {
    this.dataService.add('messages', { 
      id: Math.random(), 
      message: `${message.id}: ${message.value}`,
    });
    
    this.notifyClient();
  }
}