export async function getResources() {
  return await fetch('https://swapi.dev/api/');
}

export async function getResource(resource: string, page: number = 1) {
  if (!page) {
    return await fetch(`https://swapi.dev/api/${resource}`);
  }
  return await fetch(`https://swapi.dev/api/${resource}/?page=${page}`);
}

export async function getItem(resource: string, itemId: string) {
  return await fetch(`https://swapi.dev/api/${resource}/${itemId}`);
}