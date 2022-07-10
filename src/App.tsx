import { useEffect, useState } from "react";
import { NamedAPIResourceList, PokemonClient, MainClient } from "pokenode-ts";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";

import { getPokemonImageById } from "./utils/images";
import { getPokemonIdByUrl } from "./utils/pokemonId";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonsList, setPokemonsList] = useState<NamedAPIResourceList>(
    {} as NamedAPIResourceList
  );

  const api = new MainClient();

  useEffect(() => {
    (async () => {
      const response = await api.pokemon.listPokemons(0, 20);
      console.log(response);
      setPokemonsList(response);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Pokémon..."
      />
      <PokemonList>
        {pokemonsList.results?.map((pokemon) => (
          <PokemonCard
            id={Number(getPokemonIdByUrl(pokemon.url))}
            image={getPokemonImageById(getPokemonIdByUrl(pokemon.url))}
            name={pokemon.name}
          />
        ))}
      </PokemonList>
    </div>
  );
}

export default App;
