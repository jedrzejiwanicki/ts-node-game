import { Request, Response } from 'express';
import { DataService } from '../services/DataService';

export class MessagesController {
  private dataService: DataService = new DataService();
  
  getAll(request: Request, response: Response): Response {
    return response.send(this.dataService.getAll('messages'));
  }
}