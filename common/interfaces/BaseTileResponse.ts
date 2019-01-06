import {PositionResponse} from './PositionResponse';

export interface BaseTileResponse extends PositionResponse {
  width: number;
  height: number;
  id: number;
}