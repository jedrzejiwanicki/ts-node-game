import { images } from '@constants/images';
import { AssetImage } from './AssetImage';
import { ImageDirectory } from './ImageDirectory';

export class ImageResolver {
  private imageDirectory: ImageDirectory = new ImageDirectory();

  load(entry: string[]): Promise<any> {
    const [key, path] = entry;

    return AssetImage
      .load(path)
      .then((image: HTMLImageElement) => this.imageDirectory.add({
        image,
        key,
      }))
  }

  resolve(): Promise<any[]> {
    const promises: Promise<any>[] = Object.entries(images).map((entry: string[]) => this.load(entry));

    return Promise.all(promises);
  }
}