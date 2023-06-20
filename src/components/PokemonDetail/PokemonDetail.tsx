import { Pokemon } from "@/domain/repositories/pokemon/pokemonRepository.types";

import styles from "./PokemonDetail.module.css";

type PokemonDetailProps = { pokemon: Pokemon };

function PokemonDetail({ pokemon }: PokemonDetailProps) {
  return (
    <div className={styles.container}>
      <p>Id: {pokemon.id}</p>
      <p>Name: {pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt="pokemon-sprite" />
    </div>
  );
}

export default PokemonDetail;
