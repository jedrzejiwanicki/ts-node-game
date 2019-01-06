import { GridConfig } from '@interfaces/GridConfig';
import { CollidableOffset } from '@interfaces/CollidableOffset';
import { HealthBarConfig } from '@interfaces/HealthBarConfig';

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
}

export const VERTICAL_AXIS = 'vertical';
export const HORIZONTAL_AXIS = 'horizontal';