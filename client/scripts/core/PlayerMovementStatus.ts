import { PlayerMovementStatus as PlayerMovementStatusType } from '@type/PlayerMovementStatus';
import { PlayerMovementStatus as PlayerMovementStatusEnum } from '@enums/PlayerMovementStatus';
import {Socket} from '@utils/Socket';

export class PlayerMovementStatus {
  status: PlayerMovementStatusType = PlayerMovementStatusEnum.Idle;
  private socket: Socket = new Socket();

  get(): PlayerMovementStatusType {
    return this.status;
  }

  update(status: PlayerMovementStatusType, id: number): void {
    this.socket.getInstance().emit('client.player.movement', { id, status });
    this.status = status;
  }
}