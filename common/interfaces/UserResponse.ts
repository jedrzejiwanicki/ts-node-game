import { Direction } from 'client/scripts/types/direction';
import { PlayerMovementStatus } from 'client/scripts/types/PlayerMovementStatus';
import {PositionResponse} from './PositionResponse';

export interface UserResponse extends PositionResponse {
  id: number;
  direction: Direction;
  movement: PlayerMovementStatus;
  spriteIndex: number;
  width: number;
  height: number;
  health: number;
  attackable: boolean;
}