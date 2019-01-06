import { Request, Response } from 'express';
import { LandscapeService } from '../services/LandscapeService';

export class LandscapeController {
  private landscapeService: LandscapeService = new LandscapeService();

  getAll(request: Request, response: Response): Response {
    return response.send(this.landscapeService.getAll())
  }
}