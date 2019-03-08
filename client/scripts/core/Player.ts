import { PlayerMovementController } from '@core/PlayerMovementController';
import { PlayerPosition } from '@core/PlayerPosition';
import { PlayerMovementStatus } from '@core/PlayerMovementStatus';
import { PlayerDirection } from '@core/PlayerDirection';
import { Socket } from '@utils/Socket';
import { createUserRequest } from '@api/user';

export class Player {
  static instance: Player;
  public id: number;
  private position: PlayerPosition = new PlayerPosition(0, 0);
  private socket: Socket = new Socket();
  private direction: PlayerDirection = new PlayerDirection();
  private movementStatus: PlayerMovementStatus = new PlayerMovementStatus();
  private playerMovementController = new PlayerMovementController(this.position, this.direction, this.movementStatus);

  constructor() {
    if (Player.instance) {
      return Player.instance;
    }

    this.watchKeyboardInput();
    this.destroyOnBeforeUnload();
    Player.instance = this;
  }

  private watchKeyboardInput(): void {
    document.addEventListener('keyup', () => {
      this.playerMovementController.onKeyUp(this.id);
    });
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.playerMovementController.onKeyDown(event, this.id)
    })
  }

  private destroyOnBeforeUnload(): void {
    window.addEventListener('beforeunload', () => {
      this.socket.getInstance().emit('client.player.leave', this.id);
    }, false)
  }

  public registerUser(): Promise<any> {
    return createUserRequest().then((data) => this.id = data.id)
  }
}