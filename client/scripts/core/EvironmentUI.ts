import { Context } from '@core/Context';
import {ImageDirectoryEntry} from '@interfaces/ImageDirectoryEntry';
import {ImageDirectory} from '@utils/ImageDirectory';
import {TileResponse} from '@interfaces/TileResponse';

export class EnvironmentUI {
  protected context: CanvasRenderingContext2D = new Context().getInstance();
  protected imageDirectory: ImageDirectory = new ImageDirectory();
  protected environmentDataService: any;


  draw() {
    const tiles: TileResponse[] = this.environmentDataService.getAll();

    if (tiles) {
      tiles.forEach((tile: TileResponse) => {
        const entry: ImageDirectoryEntry = this.imageDirectory.get(tile.spriteKey);
        this.context.drawImage(entry.image, tile.x, tile.y, tile.width, tile.height);
      })

    }
  }
}
