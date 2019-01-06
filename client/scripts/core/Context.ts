export class Context {
  static instance: Context;
  private context: CanvasRenderingContext2D;

  constructor() {
    if (Context.instance) {
      return Context.instance;
    }

    Context.instance = this;
  }

  register(canvas: HTMLCanvasElement): void {
    this.context = <CanvasRenderingContext2D>canvas.getContext('2d');
  }

  getInstance(): CanvasRenderingContext2D {
    return this.context;
  }
}