import { CollisionCheckPayload } from '@interfaces/CollisionCheckPayload';
import { UserResponse } from '@interfaces/UserResponse';
import { directionToPositionMap, userCollidableOffset } from '@constants/index';

export function mapDirectionToCollisionPayload(user: UserResponse): CollisionCheckPayload {
  const { direction, id, x, y } = user;

  return {
    id,
    x: x + directionToPositionMap[direction].x,
    y: y + directionToPositionMap[direction].y,
    offset: userCollidableOffset
  }
}