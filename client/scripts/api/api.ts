export function api(path: string, attributes: Object) {
  return fetch(path, attributes).then(res => res.json());
}