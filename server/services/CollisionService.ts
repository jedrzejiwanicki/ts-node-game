import { CollisionCheckPayload } from '@interfaces/CollisionCheckPayload';
import { CollidableDataService } from './CollidableDataService';

export class CollisionService {
  private collidableDataService: CollidableDataService = new CollidableDataService();

  isOnCollisionRoute(options: CollisionCheckPayload): boolean {
    return !!this.collidableDataService
      .getCollidable()
      .find(({ position: { x, y }, id, width, height }: { id: number, position: { x: number, y: number }, width: number, height: number }) => {
        return options.x + options.offset.x >= x &&
          options.x + options.offset.x <= x + width &&
          options.y + options.offset.y >= y &&
          options.y + options.offset.y <= y + height &&
          options.id !== id
      })
  }
}