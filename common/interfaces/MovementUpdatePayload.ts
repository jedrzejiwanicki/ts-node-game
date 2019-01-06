import { PlayerMovementStatus } from 'client/scripts/types/PlayerMovementStatus';

export interface MovementUpdatePayload {
  id: number;
  status: PlayerMovementStatus;
}