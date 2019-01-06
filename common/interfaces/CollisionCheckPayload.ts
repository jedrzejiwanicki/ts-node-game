import {CollidableOffset} from '@interfaces/CollidableOffset';

export interface CollisionCheckPayload {
  x: number;
  y: number;
  offset: CollidableOffset;
  id: number;
}