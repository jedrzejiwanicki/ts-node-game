import {api} from '@api/api';
import {getMessagesPath} from '@api/paths';

export function getMessages(): Promise<any> {
  return api(getMessagesPath(), { method: 'get' });
}