import { ImageDirectoryEntry } from '@interfaces/ImageDirectoryEntry';

export class ImageDirectory {
  static instance: ImageDirectory;
  private directory: ImageDirectoryEntry[] = [];

  constructor() {
    if (ImageDirectory.instance) {
      return ImageDirectory.instance;
    }

    ImageDirectory.instance = this;
  }

  add(entry: ImageDirectoryEntry): void {
    this.directory = [...this.directory, entry];
  }

  getAll(): ImageDirectoryEntry[] {
    return this.directory;
  }

  get(key: string): ImageDirectoryEntry {
    return <ImageDirectoryEntry>this.directory.find((entry: ImageDirectoryEntry) => entry.key === key)
  }
}