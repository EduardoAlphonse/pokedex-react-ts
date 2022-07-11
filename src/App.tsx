import { useEffect, useState } from "react";
import { NamedAPIResourceList } from "pokenode-ts";

import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";

import { api } from "./services/api";
import { getPokemonImageById } from "./utils/images";
import { getPokemonIdByUrl } from "./utils/pokemonId";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [pokemonsList, setPokemonsList] = useState<NamedAPIResourceList>(
    {} as NamedAPIResourceList
  );
  const [filteredPokemonsList, setFilteredPokemonsList] =
    useState<NamedAPIResourceList>({} as NamedAPIResourceList);

  function filterPokemonsList() {
    const formattedSearch = search.toLocaleLowerCase();
    if (formattedSearch === "") {
      setFilteredPokemonsList(pokemonsList);
      return;
    }
    const newPokemonsList: NamedAPIResourceList = {
      ...pokemonsList,
      results: pokemonsList.results.filter((pokemon) =>
        pokemon.name.includes(formattedSearch)
      ),
    };
    setFilteredPokemonsList(newPokemonsList);
  }
  useEffect(() => {
    (async () => {
      const response = await api.pokemon.listPokemons(0, 30);
      setPokemonsList(response);
      setFilteredPokemonsList(response);
    })();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      filterPokemonsList();
    });

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Pokémon..."
      />
      <PokemonList className="responsive-container">
        {filteredPokemonsList.results?.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
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
