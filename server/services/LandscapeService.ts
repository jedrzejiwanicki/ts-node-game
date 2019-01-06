import {TileResponse} from '@interfaces/TileResponse';
import {Tile} from '../models/Tile';
import { landscapeConfig } from '../utils/LandscapeConfig';
import {DataService} from './DataService';

export class LandscapeService {
  static instance: LandscapeService;
  private data: DataService = new DataService();

  constructor() {
    if (LandscapeService.instance) {
      return LandscapeService.instance;
    }

    LandscapeService.instance = this;
  }

  generate(): void {

    const tiles: Tile[] = landscapeConfig.map((configItem: any) =>
      new Tile(
        configItem.x,
        configItem.y,
        configItem.spriteKey,
        true,
      ));

    this.data.addMany('landscape', tiles);
  }

  public getAll(): TileResponse[] {
    return this.data.getAll('landscape').map((tile: Tile) => tile.response());
  }
}