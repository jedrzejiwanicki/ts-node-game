import { getUsersRequest } from '@api/user';
import { ClientDataService } from '@core/ClientDataService';
import { DataDirectory } from '@utils/DataDirectory';
import { Socket } from '@utils/Socket';
import { UserResponse } from '@interfaces/UserResponse';

export class UserDataService {
  private data: DataDirectory = new ClientDataService().getInstance();
  private socket: Socket = new Socket();

  private getInitialUsers(): Promise<any> {
    return getUsersRequest()
      .then((users: UserResponse[]) => {
        this.data.addMany('user', users)
        users.forEach((user: UserResponse) => this.subscribeToUserChange(user.id))
      })
  }

  private subscribeToUserChange(id: number) {
    const instance = this.socket.getInstance();

    instance.on(`server.user.${id}.update`, (user: UserResponse) => this.data.update('user', user.id, user));
    instance.on(`server.user.${id}.removed`, () => this.data.remove('user', id));
    instance.on(`server.user.${id}.error`, () => location.reload());
  }

  private subscribeToNewUser() {
    this.socket.getInstance().on('server.user.new', (user: UserResponse) => {

      this.data.add('user', user)
      this.subscribeToUserChange(user.id);
    })
  }

  public getUsers(): UserResponse[] {
    return this.data.getAll('user');
  }

  public init(): void {
    this.getInitialUsers();
    this.subscribeToNewUser();
  }
}