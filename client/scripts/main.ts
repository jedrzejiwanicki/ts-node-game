import { Game } from "./core/Game";
import { Context } from './core/Context';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

(function(){
  new Context().register(canvas);
  new Game().init();
})();

