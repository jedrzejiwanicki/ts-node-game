export class AssetImage {
  static load(path: string): Promise<HTMLImageElement> {
    return new Promise(resolve => {
      const img = new Image();
      img.src = path;
      img.width = 50;
      img.height = 50;
      img.onload = () => resolve(img);
    })
  }
}