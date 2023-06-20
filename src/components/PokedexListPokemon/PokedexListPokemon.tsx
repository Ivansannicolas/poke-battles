import { PokemonResult } from "@/domain/repositories/pokemon/pokemonRepository.types";
import { FullURL } from "@/domain/apiClients/pokeApiClient.types";

import styles from "./PokedexListPokemon.module.css";

type PokedexListPokemonProps = {
  pokemon: PokemonResult;
  pokeballSprite: FullURL;
  selectPokemon: (pokemonURL: string) => void;
};

function PokedexListPokemon({ pokemon, pokeballSprite, selectPokemon }: PokedexListPokemonProps) {
  const handleSelectPokemon = () => {
    selectPokemon(pokemon.url);
  };

  return (
    <button className={styles.container} onClick={handleSelectPokemon} type="button">
      <img src={pokeballSprite} />
      <span>{pokemon.name}</span>
    </button>
  );
}

export default PokedexListPokemon;
