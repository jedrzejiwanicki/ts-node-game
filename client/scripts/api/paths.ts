export function getBasePath(): string {
  return 'http://3.17.148.8:3001';
}

export function getUserPath(): string {
  return `${getBasePath()}/user`;
}

export function getGridPath(): string {
  return `${getBasePath()}/grid`;
}

export function getLandscapePath(): string {
  return `${getBasePath()}/landscape`;
}