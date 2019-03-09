import { Direction } from '@type/direction';
import { Direction as DirectionEnum } from '@enums/Direction';
import { PlayerMovementStatus } from '@type/PlayerMovementStatus';
import { PlayerMovementStatus as PlayerMovementStatusEnum } from '@enums/PlayerMovementStatus';
import {UserResponse} from '@interfaces/UserResponse';

import {BaseTile} from './BaseTile';

export class User extends BaseTile {
  public id = Math.random();
  private movement: PlayerMovementStatus = PlayerMovementStatusEnum.Idle;
  private direction: Direction = DirectionEnum.Bottom;
  private spriteIndex: number = 1;
  private spriteIndexInterval: any;
  private health: number = 100;
  private name: string = 'Anonymous' + this.id;

  constructor(hostname: string) {
    super({ x: 0, y: 0, attackable: true, collidable: true });
    this.name = hostname;
    this.startSpriteInterval();
  }

  response(): UserResponse {
    return {
      id: this.id,
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      health: this.health,
      height: this.height,
      direction: this.direction,
      movement: this.movement,
      spriteIndex: this.spriteIndex,
      attackable: this.attackable,
      name: this.name,
    }
  }

  decrementHealth(): void {
    this.health -= 5;
  }

  updateDirection(direction: Direction) {
    this.direction = direction;
  }

  updateMovement(movement: PlayerMovementStatus) {
    this.movement = movement;
  }

  updatePositionX(x: number) {
    this.position.x += x;
  }

  updatePositionY(y: number) {
    this.position.y += y;
  }

  startSpriteInterval() {
    clearInterval(this.spriteIndexInterval);

    this.spriteIndexInterval = setInterval(() => this.updateSpriteIndex(), 100);
  }

  updateSpriteIndex() {
    if (this.spriteIndex >= 4) {
      this.spriteIndex = 1;
    } else {
      this.spriteIndex += 1;
    }
  }
}