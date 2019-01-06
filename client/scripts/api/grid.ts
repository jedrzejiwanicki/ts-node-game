import { api } from '@api/api';
import { getGridPath } from '@api/paths';

export function getGridRequest(): Promise<any> {
  return api(getGridPath(), { method: 'get' });
}