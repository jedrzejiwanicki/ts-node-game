import { UserResponse } from '@interfaces/UserResponse';
import { UserService } from '../services/UserService';

export class UserSocketController {
  private userService: UserService = new UserService();

  remove(id: number) {
    this.userService.remove(id);

    global.io.emit(`server.user.${id}.removed`, '');
  }

  update(type: string, data: any) {
    switch(type) {
      case 'movement':
        this.userService.updateMovement(data);
        break;
      case 'direction':
        this.userService.updateDirection(data);
        break;
      case 'position.x':
        this.userService.updatePositionX(data);
        break;
      case 'position.y':
        this.userService.updatePositionY(data);
        break;
    }

    const user: UserResponse = this.userService.get(data.id);

    if (user) {
      global.io.emit(`server.user.${data.id}.update`, user);
    } else {
      global.io.emit(`server.user.${data.id}.error`);
    }
  }
}