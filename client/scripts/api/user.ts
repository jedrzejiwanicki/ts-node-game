import { getUserPath } from '@api/paths';
import { api } from '@api/api';

export function createUserRequest(): Promise<any> {
  return api(getUserPath(), { method: 'post' })
}

export function getUsersRequest(): Promise<any> {
  return api(getUserPath(), { method: 'get' });
}