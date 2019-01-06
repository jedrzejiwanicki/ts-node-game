import { Coordinates } from '@interfaces/../../common/interfaces/Coordinates';
import { BaseTileOptions } from '@interfaces/BaseTileOptions';
import { BaseTileResponse } from '@interfaces/BaseTileResponse';

export abstract class BaseTile {
  protected id: number = Math.random();
  protected position: Coordinates;
  protected width: number = 50;
  protected height: number = 50;
  protected collidable: boolean;
  protected attackable: boolean;

  constructor(options: BaseTileOptions) {
    this.position = { x: options.x, y: options.y };
    this.collidable = options.collidable;
    this.attackable = options.attackable;
  }

  response(): BaseTileResponse {
    return {
      id: this.id,
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      attackable: this.attackable,
    }
  }
}