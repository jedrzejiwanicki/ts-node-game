import { Request, Response } from 'express';
import { GridService } from '../services/GridService';

export class GridController {
  private gridService: GridService = new GridService();

  getAll(request: Request, response: Response): Response {
    return response.send(this.gridService.getAll())
  }
}