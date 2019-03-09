export function getBasePath(): string {
  return <string>process.env.API;
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

export function getMessagesPath(): string {
  return `${getBasePath()}/messages`;
}