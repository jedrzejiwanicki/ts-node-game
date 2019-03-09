import SocketIO from 'socket.io-client';

export class Socket {
  private socket: any;
  static instance: Socket;

  constructor() {
    if(Socket.instance) {
      return Socket.instance;
    }

    this.connect();
    Socket.instance = this;
  }

  connect(): void {
    this.socket = SocketIO(`${process.env.HOSTNAME}`, { path: '/api' });
  }

  getInstance(): any {
    return this.socket;
  }
}