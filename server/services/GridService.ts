import {TileResponse} from '@interfaces/TileResponse';
import {Tile} from '../models/Tile';
import {DataService} from './DataService';

export class GridService {
  static instance: GridService;
  private canvasWidth: number = 500;
  private data: DataService = new DataService();

  constructor() {
    if (GridService.instance) {
      return GridService.instance;
    }

    GridService.instance = this;
  }

  generate(): void {
    const gridItemRowColumnCount = this.canvasWidth / 50;
    const tiles: Tile[] = [];

    for (let i = 0; i < gridItemRowColumnCount; i++) {
      for (let j = 0; j < gridItemRowColumnCount; j++) {
        tiles.push(new Tile(i * 50, j * 50, 'grass'));
      }
    }

    this.data.addMany('grid', tiles);
  }

  public getAll(): TileResponse[] {
    return this.data.getAll('grid').map((tile: Tile) => tile.response());
  }
}