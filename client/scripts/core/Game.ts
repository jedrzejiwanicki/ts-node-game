import { GridUI } from '@core/GridUI';
import {GridDataService} from '@core/GridDataService';
import {LandscapeDataService} from '@core/LandscapeDataService';
import {LandscapeUI} from '@core/LandscapeUI';
import {Player} from '@core/Player';
import { PlayerUI } from '@core/PlayerUI';
import { Context } from '@core/Context';
import {UserDataService} from '@core/UserDataService';
import { ImageResolver } from '@utils/ImageResolver';

export class Game {
  private context: CanvasRenderingContext2D = new Context().getInstance();
  private imageResolver: ImageResolver = new ImageResolver();
  private userDataService: UserDataService = new UserDataService();
  private gridDataService: GridDataService = new GridDataService();
  private landscapeDataService: LandscapeDataService = new LandscapeDataService();
  private player: Player = new Player();

  init() {
    this.imageResolver.resolve().then(() => this.start());
    this.player.registerUser();
    this.userDataService.init();
    this.gridDataService.init();
    this.landscapeDataService.init();
  }

  start(): void {
    setInterval(() => this.draw(), 10);
  }

  clear(): void {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
  }

  draw(): void {
    this.clear();

    new GridUI().draw();
    new LandscapeUI().draw();
    new PlayerUI().draw();
  }
 }