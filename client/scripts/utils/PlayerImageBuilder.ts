import { PlayerImageBuilderOptions } from '@interfaces/PlayerImageBuilderOptions';
import { Direction } from '@type/direction';
import { PlayerMovementStatus } from '@type/PlayerMovementStatus';
import { PlayerMovementStatus as PlayerMovementStatusEnum } from '@enums/PlayerMovementStatus';

const indexStart = 1;
const indexEnd = 4;

const intervals = {
  [PlayerMovementStatusEnum.Run]: 100,
  [PlayerMovementStatusEnum.Idle]: 400,
  [PlayerMovementStatusEnum.Attack]: 100,
};

export class PlayerImageBuilder {
  static instance: PlayerImageBuilder;
  private movementStatus: PlayerMovementStatus = PlayerMovementStatusEnum.Idle;
  private playerDirection: Direction;
  private prefix = 'player_';

  constructor() {
    if (PlayerImageBuilder.instance) {
      return PlayerImageBuilder.instance;
    }

    PlayerImageBuilder.instance = this;
  }

  getKey(options: PlayerImageBuilderOptions): string {


    this.playerDirection = options.direction;
    this.movementStatus = options.movementStatus;

    return `${this.prefix}${options.direction}_${options.movementStatus}_${options.spriteIndex}`
  }
}

