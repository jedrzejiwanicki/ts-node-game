import {getLandscapeRequest} from '@api/landscape';
import { ClientDataService } from '@core/ClientDataService';
import { DataDirectory } from '@utils/DataDirectory';
import { TileResponse } from '@interfaces/TileResponse';

export class LandscapeDataService {
  private data: DataDirectory = new ClientDataService().getInstance();

  init(): void {
    this.getInitialLandscape();
  }

  getInitialLandscape(): void {
    getLandscapeRequest().then((tiles: TileResponse[]) => this.data.addMany('landscape', tiles))
  }

  getAll(): TileResponse[] {
    return this.data.getAll('landscape');
  }
}