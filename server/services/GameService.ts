import {UserSocketController} from '../controllers/UserSocketController';
import {DirectionUpdatePayload} from '@interfaces/DirectionUpdatePayload';
import {MovementUpdatePayload} from '@interfaces/MovementUpdatePayload';
import {PositionXUpdatePayload} from '@interfaces/PositionXUpdatePayload';
import {PositionYUpdatePayload} from '@interfaces/PositionYUpdatePayload';
import {GridService} from './GridService';
import { LandscapeService } from './LandscapeService';

export class GameService {
  init(): void {
    new GridService().generate();
    new LandscapeService().generate();

    global.io.on('connection', (socket:any) => {
      socket.on('client.player.direction', (data: DirectionUpdatePayload) => new UserSocketController().update('direction', data))
      socket.on('client.player.movement', (data: MovementUpdatePayload) => new UserSocketController().update('movement', data))
      socket.on('client.player.position.x', (data: PositionXUpdatePayload) => new UserSocketController().update('position.x', data))
      socket.on('client.player.position.y', (data: PositionYUpdatePayload) => new UserSocketController().update('position.y', data))
      socket.on('client.player.position.y', (data: PositionYUpdatePayload) => new UserSocketController().update('position.y', data))
      socket.on('client.player.leave', (id: number) => new UserSocketController().remove(id))
    });
  }
}