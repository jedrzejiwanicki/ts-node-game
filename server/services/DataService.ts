import { DataDirectory } from '@utils/DataDirectory';

export class DataService {
  static instance: DataService;
  private dataDirectory: DataDirectory = new DataDirectory();

  constructor() {
    if (DataService.instance) {
      return DataService.instance
    }

    DataService.instance = this;
  }
  remove(type: string, id: number) {
    this.dataDirectory.remove(type, id);
  }

  add(type: string, data: any) {
    this.dataDirectory.add(type, data);
  }

  addMany(type: string, data: any[]) {
    this.dataDirectory.addMany(type, data);
  }

  getAll(type: string): any {
    return this.dataDirectory.getAll(type);
  }

  get(type: string, index: number): any {
    return this.dataDirectory.get(type, index)
  }

  update(type: string, index: number, data: any) {
    this.dataDirectory.update(type, index, data);
  }

  keys(): string[] {
    return this.dataDirectory.keys();
  }
}