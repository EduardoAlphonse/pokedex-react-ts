export function getPokemonIdByUrl(url: string) {
  return url.slice(url.indexOf("pokemon/") + 8, -1);
}
