import { CollisionCheckPayload } from '@interfaces/CollisionCheckPayload';
import {Collidable} from '@type/Collidable';
import {BaseTile} from '../models/BaseTile';
import { CollidableDataService } from './CollidableDataService';

export class CollisionService {
  private collidableDataService: CollidableDataService = new CollidableDataService();

  isOnCollisionRoute(options: CollisionCheckPayload): boolean {
    return !!this.getCollisionObject(options);
  }

  getCollisionObject(options: CollisionCheckPayload): Collidable {
    return this.collidableDataService
      .getCollidable()
      .find(({ position: { x, y }, id, width, height }: { id: number, position: { x: number, y: number }, width: number, height: number }) =>
          options.x + options.offset.x >= x &&
          options.x + options.offset.x <= x + width &&
          options.y + options.offset.y >= y &&
          options.y + options.offset.y <= y + height &&
          options.id !== id
      )
  }
}