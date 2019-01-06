import { Axis } from '@type/axis';
import { Direction as DirectionType } from '@type/direction';
import { Direction } from '@enums/Direction';

export class DirectionHelper {
  static vertical(prevPos: number, currentPos: number): DirectionType {
    return prevPos < currentPos ? Direction.Bottom : Direction.Top;
  }

  static horizontal(prevPos: number, currentPos: number): DirectionType {
    return prevPos > currentPos ? Direction.Right : Direction.Left;
  }

  static checkCurrentDirection(prevPos: number, currentPos: number, axis: Axis): DirectionType {
    return DirectionHelper[axis](prevPos, currentPos);
  }
}