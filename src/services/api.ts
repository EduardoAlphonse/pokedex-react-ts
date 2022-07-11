import { MainClient } from "pokenode-ts";

export const api = new MainClient();

export async function getPokemonColorById(id: number) {
  const result = await api.pokemon.getPokemonColorById(id);
  return result.name;
}
