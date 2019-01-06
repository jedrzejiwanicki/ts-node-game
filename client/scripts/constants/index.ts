import { GridConfig } from '@interfaces/GridConfig';
import { CollidableOffset } from '@interfaces/CollidableOffset';
import { HealthBarConfig } from '@interfaces/HealthBarConfig';
import { Direction } from '@enums/Direction';

export const gridConfigDefault: GridConfig = {
  gridItemSide: 50,
};

export const userCollidableOffset: CollidableOffset = {
  x: 25,
  y: 50,
};

export const healthBarConfig: HealthBarConfig = {
  offsetY: 10,
  offsetX: 0,
  width: 50,
  height: 5,
  color: 'blue',
  bgColor: 'black',
};

export const directionToPositionMap = {
  [Direction.Bottom]: { x: 0, y: 10 },
  [Direction.Left]: { x: -10, y: 0},
  [Direction.Right]: { x: 10, y: 0},
  [Direction.Top]: { x: 0, y: -10 },
};

export const VERTICAL_AXIS = 'vertical';
export const HORIZONTAL_AXIS = 'horizontal';