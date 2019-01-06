import { DataDirectory } from '@utils/DataDirectory';

export class ClientDataService {
  static instance: ClientDataService;
  private data: DataDirectory = new DataDirectory();

  constructor() {
    if(ClientDataService.instance) {
      return ClientDataService.instance;
    }

    ClientDataService.instance = this;
  }

  getInstance(): DataDirectory {
    return this.data;
  }
}