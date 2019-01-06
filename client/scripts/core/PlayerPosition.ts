import { Coordinates } from '@interfaces/Coordinates';
import {Socket} from '@utils/Socket';

export class PlayerPosition {
  private _x: number;
  private _y: number;
  private socket: Socket = new Socket();

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  updateX(x: number, id: number): void {
    this.socket.getInstance().emit('client.player.position.x', { x, id });
    this._x += x;
  }

  updateY(y: number, id: number): void {
    this.socket.getInstance().emit('client.player.position.y', { y, id });
    this._y += y;
  }

  getCoordinates(): Coordinates {
    return {
      x: this._x,
      y: this._y,
    }
  }
}