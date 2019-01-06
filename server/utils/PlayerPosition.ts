import { Coordinates } from '@interfaces/Coordinates';

export class PlayerPosition {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  set x(newPosX: number) {
    this._x = newPosX;
  }

  set y(newPosY: number) {
    this._y = newPosY;
  }

  updateX(update: number): void {
    this._x += update;
  }

  updateY(update: number): void {
    this._y += update;
  }

  getCoordinates(): Coordinates {
    return {
      x: this._x,
      y: this._y,
    }
  }
}