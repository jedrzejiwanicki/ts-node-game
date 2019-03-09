import {MessagingController} from '@core/MessagingController';
import { Game } from "./core/Game";
import { Context } from './core/Context';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

(function(){
  new Context().register(canvas);
  new Game().init();
  new MessagingController('game_messages_form', 'game_messages_container').init()
})();

