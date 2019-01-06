import { DataService } from './DataService';

export class CollidableDataService {
  private dataService: DataService = new DataService();

  getCollidable(): any {
    return this.dataService.keys()
      .map((key: string) =>
        this.dataService.getAll(key).filter((entity: any) => entity.collidable)
      )
      .reduce((acc: Array<any>, item: Array<any>) => [...acc, ...item], [])
  }
}