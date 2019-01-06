import {Context} from '@core/Context';
import {HealthBarUIOptions} from '@interfaces/HealthBarUIOptions';
import { healthBarConfig } from '@constants/index';

export class HealthBarUI {
  private context: CanvasRenderingContext2D = new Context().getInstance();
  private x: number;
  private y: number;
  private health: number;

  constructor(options: HealthBarUIOptions) {
    this.health = options.health;
    this.x = options.x;
    this.y = options.y;

    this.draw();
  }

  draw(): void {
    console.log(this.health);
    this.context.fillStyle = healthBarConfig.bgColor;
    this.context.fillRect(
      this.x - healthBarConfig.offsetX,
      this.y - healthBarConfig.offsetY,
      healthBarConfig.width,
      healthBarConfig.height,
    );
    this.context.fillStyle = healthBarConfig.color;
    this.context.fillRect(
      this.x - healthBarConfig.offsetX,
      this.y - healthBarConfig.offsetY,
      (this.health / 100) * healthBarConfig.width,
      healthBarConfig.height);
  }
}