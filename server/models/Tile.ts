import { TileResponse } from '@interfaces/TileResponse';
import { BaseTile } from './BaseTile';

export class Tile extends BaseTile {
  protected spriteKey: string;

  constructor(x: number, y: number, sprite: string, collidable: boolean = false) {
    super({ x, y, collidable, attackable: false });

    this.spriteKey = sprite;
  }

  response(): TileResponse {
    return {
      id: this.id,
      x: this.position.x,
      y: this.position.y,
      width: this.width,
      height: this.height,
      spriteKey: this.spriteKey,
      attackable: this.attackable,
    }
  }
}