import { Request, Response } from 'express';

import { UserResponse } from '@interfaces/UserResponse';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService = new UserService();

  create(request: Request, response: Response): Response {
    const { name } = request.body;
    
    const user: UserResponse = this.userService.create(name || 'Anonymous');

    global.io.emit('server.user.new', user);

    return response.send(user);
  }

  getAll(request: Request, response: Response): Response {
    const users: UserResponse[] = this.userService.getAll();

    return response.send(users);
  }
}