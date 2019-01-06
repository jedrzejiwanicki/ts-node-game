import { ObjectImage } from '@enums/ObjectImage';
import { ObjectImage as ObjectImageType } from '@type/ObjectImage';
import { PlayerImageBuilder } from '@utils/PlayerImageBuilder';

export class ObjectImageResolver {
  static resolve(type: ObjectImageType, options: any) {
    switch(type) {
      case ObjectImage.Player:
        return new PlayerImageBuilder().getKey(options);
    }
  }
}