import { HealthBarUI } from '@core/HealthBarUI';
import { UserDataService } from '@core/UserDataService';
import { ImageDirectory } from '@utils/ImageDirectory';
import { ObjectImage } from '@enums/ObjectImage';
import { Context } from '@core/Context';
import { ObjectImageResolver } from '@factory/ObjectImageResolver';
import { UserResponse } from '@interfaces/UserResponse';

export class PlayerUI {
  static instance: PlayerUI;
  private context: CanvasRenderingContext2D = new Context().getInstance();
  private imageDirectory: ImageDirectory = new ImageDirectory();
  private userDataService: UserDataService = new UserDataService();

  constructor() {
    if(PlayerUI.instance) {
      return PlayerUI.instance;
    }

    PlayerUI.instance = this;
  }

  draw(): void {
    const users: UserResponse[] = this.userDataService.getUsers();

    if(users) {
      users.forEach((user: any) => {
        const imageKey = <string>ObjectImageResolver.resolve(ObjectImage.Player, {
          direction: user.direction,
          movementStatus: user.movement,
          spriteIndex: user.spriteIndex,
        });

        this.context.drawImage(this.imageDirectory.get(imageKey).image, user.x, user.y, user.width, user.height);

        new HealthBarUI({ health: user.health, x: user.x, y: user.y });
      })
    }
  }
}