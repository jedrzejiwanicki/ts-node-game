import { Direction as DirectionEnum } from '@enums/Direction';
import { Direction } from '@type/direction';
import { Socket } from '@utils/Socket';

export class PlayerDirection {
  private direction: Direction = DirectionEnum.Bottom;
  private socket: Socket = new Socket();

  update (direction: Direction, id: number) {
    this.socket.getInstance().emit('client.player.direction', { id, direction });
    this.direction = direction;
  }

  get(): Direction {
    return this.direction;
  }
}