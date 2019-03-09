import {userCollidableOffset} from '@constants/index';
import { DirectionUpdatePayload } from '@interfaces/DirectionUpdatePayload';
import {MovementUpdatePayload} from '@interfaces/MovementUpdatePayload';
import {PositionXUpdatePayload} from '@interfaces/PositionXUpdatePayload';
import {PositionYUpdatePayload} from '@interfaces/PositionYUpdatePayload';
import { UserResponse } from '@interfaces/UserResponse';
import { User } from '../models/User';
import {AttackService} from './AttackService';
import {CollisionService} from './CollisionService';
import { DataService } from './DataService';

export class UserService {
  static instance: UserService;
  private dataService: DataService = new DataService();
  private collisionService: CollisionService = new CollisionService();
  private attackService: AttackService = new AttackService();

  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }

    UserService.instance = this;
  }

  create(hostname: string): UserResponse {
    const user = new User(hostname);

    this.dataService.add('user', user);

    return user.response();
  }

  remove(id: number): void {
    this.dataService.remove('user', id)
  }

  get(id: number): UserResponse {
    const user: User  = this.dataService.get('user', id);

    return user && user.response();
  }

  getAll(): UserResponse[] {
    const users: User[] = this.dataService.getAll('user') || [];

    return users.map((user: User) => user.response())
  }

  performDamage(user: User) {
    user.decrementHealth();
    this.dataService.update('user', user.response().id, user);

    if (user.response().health < 0) {
      this.remove(user.response().id);
      global.io.emit(`server.user.${user.response().id}.removed`);
    } else {
      global.io.emit(`server.user.${user.response().id}.update`, user.response())
    }
  }

  updateDirection(data: DirectionUpdatePayload) {
    const user: User = this.dataService.get('user', data.id);

    if (!user) {
      return;
    }

    user.updateDirection(data.direction);

    this.dataService.update('user', data.id, user)
  }

  updateMovement(data: MovementUpdatePayload) {
    const user: User = this.dataService.get('user', data.id);
    const attacked: User | undefined = this.attackService.getAttacked(data);

    if (!user) {
      return;
    }

    if (attacked) {
      this.performDamage(attacked);
    }

    user.updateMovement(data.status);

    this.dataService.update('user', data.id, user);
  }

  updatePositionX(data: PositionXUpdatePayload) {
    const user: User = this.dataService.get('user', data.id);

    if (!user) {
      return;
    }

    const userResponse: UserResponse = user.response();
    const isOnCollisionRoute: boolean = this.collisionService
      .isOnCollisionRoute({
        x: userResponse.x + data.x,
        y: userResponse.y,
        offset: userCollidableOffset,
        id: userResponse.id,
      });

    if (!isOnCollisionRoute) {
      user.updatePositionX(data.x);

      this.dataService.update('user', data.id, user);
    }
  }

  updatePositionY(data: PositionYUpdatePayload) {
    const user: User = this.dataService.get('user', data.id);

    if (!user) {
      return;
    }

    const userResponse: UserResponse = user.response();
    const isOnCollisionRoute: boolean = this.collisionService
      .isOnCollisionRoute({
        x: userResponse.x ,
        y: userResponse.y + data.y,
        offset: userCollidableOffset,
        id: userResponse.id,
      });

    if(!isOnCollisionRoute) {
      user.updatePositionY(data.y);

      this.dataService.update('user', data.id, user);
    }
  }
}