import {Tile} from '../../server/models/Tile';
import {User} from '../../server/models/User';

export interface DataDirectory {
  user: Array<User>;
  grid: Array<Tile>;
  landscape: Array<Tile>;
}