import { MovementUpdatePayload } from '@interfaces/MovementUpdatePayload';
import { PlayerMovementStatus } from '@enums/PlayerMovementStatus';
import { UserResponse } from '@interfaces/UserResponse';
import { User } from '../models/User';
import { mapDirectionToCollisionPayload } from '../utils';
import { CollisionService } from './CollisionService';
import { DataService } from './DataService';

export class AttackService {
  private collisionService: CollisionService = new CollisionService();
  private dataService: DataService = new DataService();

  public getAttacked(data: MovementUpdatePayload): User | undefined {
    if (data.status !== PlayerMovementStatus.Attack) {
      return;
    }

    const user: UserResponse = this.dataService.get('user', data.id).response();
    const collidedObject = <User>this.collisionService.getCollisionObject(mapDirectionToCollisionPayload(user));

    if (collidedObject && collidedObject.response().attackable) {
      return collidedObject;
    }
  }
}