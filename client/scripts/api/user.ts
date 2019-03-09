import { getUserPath } from '@api/paths';
import { api } from '@api/api';

export function createUserRequest(name: string | null): Promise<any> {
  return api(getUserPath(), { 
    method: 'post', 
    body: JSON.stringify({ name }),
    headers: { "Content-Type": "application/json", },
  })
}

export function getUsersRequest(): Promise<any> {
  return api(getUserPath(), { method: 'get' });
}