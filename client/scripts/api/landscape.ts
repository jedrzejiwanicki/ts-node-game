import {api} from '@api/api';
import {getLandscapePath} from '@api/paths';

export function getLandscapeRequest(): Promise<any> {
  return api(getLandscapePath(), { method: 'get' });
}