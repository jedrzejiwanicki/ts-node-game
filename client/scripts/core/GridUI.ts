import { EnvironmentUI } from '@core/EvironmentUI';
import { GridDataService } from '@core/GridDataService';

export class GridUI extends EnvironmentUI {
  constructor() {
    super();
    this.environmentDataService = new GridDataService();
  }
}
