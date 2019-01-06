import { PlayerMovementStatus } from '@core/PlayerMovementStatus';
import { KeyboardEventCode } from '@enums/KeyboardEventCode';
import { GridConfig } from '@interfaces/GridConfig';
import { gridConfigDefault } from '@constants/index';
import { PlayerDirection } from '@core/PlayerDirection';
import { PlayerPosition } from '@core/PlayerPosition';
import { Direction } from '@enums/Direction';
import { PlayerMovementStatus as PlayerMovementStatusEnum } from '@enums/PlayerMovementStatus';

export class PlayerMovementController {
  position: PlayerPosition;
  direction: PlayerDirection;
  movement: PlayerMovementStatus;
  interval: any;
  isMoving: boolean = false;
  config: GridConfig;

  constructor(
    position: PlayerPosition,
    direction: PlayerDirection,
    movement: PlayerMovementStatus,
    config: GridConfig = gridConfigDefault
  ) {
    this.position = position;
    this.direction = direction;
    this.movement = movement;
    this.config = config;
  }

  onKeyUp(id: number): void {
    this.direction.update(Direction.Bottom, id);
    this.movement.update(PlayerMovementStatusEnum.Idle, id);
    this.isMoving = false;

    clearInterval(this.interval)
  }

  onKeyDown(event: KeyboardEvent, id: number): void {
    if (!this.isMoving) {
      this.isMoving = true;
      this.interval = setInterval(() => this.move(event, id), 100);
    }
  }

  private handleArrowDown(event: KeyboardEvent, id: number): void {
    this.direction.update(Direction.Bottom, id);

    if (event.shiftKey) {
      this.movement.update(PlayerMovementStatusEnum.Attack, id);
    } else {
      this.position.updateY(5, id);
      this.movement.update(PlayerMovementStatusEnum.Run, id);
    }
  }

  private handleArrowUp(event: KeyboardEvent, id: number): void {
    this.direction.update(Direction.Top, id);

    if (event.shiftKey) {
      this.movement.update(PlayerMovementStatusEnum.Attack, id);
    } else {
      this.position.updateY(-5, id);
      this.movement.update(PlayerMovementStatusEnum.Run, id);
    }
  }

  private handleArrowLeft(event: KeyboardEvent, id: number): void {
    this.direction.update(Direction.Left, id);

    if (event.shiftKey) {
      this.movement.update(PlayerMovementStatusEnum.Attack, id);
    } else {
      this.position.updateX(-10, id);
      this.movement.update(PlayerMovementStatusEnum.Run, id);
    }
  }

  private handleArrowRight(event: KeyboardEvent, id: number): void {
    this.direction.update(Direction.Right, id);

    if (event.shiftKey) {
      this.movement.update(PlayerMovementStatusEnum.Attack, id);
    } else {
      this.position.updateX(10, id);
      this.movement.update(PlayerMovementStatusEnum.Run, id);
    }
  }

  private move(event: KeyboardEvent, id: number): void {
    switch (event.code) {
      case KeyboardEventCode.ArrowDown:
        this.handleArrowDown(event, id);
        break;
      case KeyboardEventCode.ArrowUp:
        this.handleArrowUp(event, id);
        break;
      case KeyboardEventCode.ArrowLeft:
        this.handleArrowLeft(event, id);
        break;
      case KeyboardEventCode.ArrowRight:
        this.handleArrowRight(event, id);
        break;
    }
  }

}