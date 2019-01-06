import { EnvironmentUI } from '@core/EvironmentUI';
import { LandscapeDataService } from '@core/LandscapeDataService';

export class LandscapeUI extends EnvironmentUI {
  constructor() {
    super();
    this.environmentDataService = new LandscapeDataService();
  }
}
