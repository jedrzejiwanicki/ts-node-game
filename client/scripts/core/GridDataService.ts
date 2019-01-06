import { ClientDataService } from '@core/ClientDataService';
import { DataDirectory } from '@utils/DataDirectory';
import { getGridRequest } from '@api/grid';
import { TileResponse } from '@interfaces/TileResponse';

export class GridDataService {
  private data: DataDirectory = new ClientDataService().getInstance();

  init(): void {
    this.getInitialGrid();
  }

  getInitialGrid(): void {
    getGridRequest().then((tiles: TileResponse[]) => this.data.addMany('grid', tiles))
  }

  getAll(): TileResponse[] {
    return this.data.getAll('grid');
  }
}