import { Direction } from 'client/scripts/types/direction';
import { PlayerMovementStatus } from 'client/scripts/types/PlayerMovementStatus';

export interface PlayerImageBuilderOptions {
  direction: Direction;
  movementStatus: PlayerMovementStatus
  spriteIndex: number;
}