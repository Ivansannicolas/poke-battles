import { useContext, useEffect, useState } from "react";

import { getPokemon, getPokemons } from "@/domain/repositories/pokemon/pokemonRepository";

import {
  Pokemon,
  PokemonListResult,
  PokemonResult,
} from "@/domain/repositories/pokemon/pokemonRepository.types";

import { PokemonStoreContext } from "@/state/PokemonContext";

import PokedexListPokemon from "@/components/PokedexListPokemon/PokedexListPokemon";
import PokemonDetail from "@/components/PokemonDetail/PokemonDetail";

import { PokeballNameIdentifiers } from "@/constants/PokeballNameIdentifiers";

import styles from "./NewTeam.module.css";

function TeamDetail() {
  const [pokemonList, setPokemonList] = useState<PokemonResult[]>([]);
  const [pokeballSprite, setPokeballSprite] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>();

  const { pokeballs } = useContext(PokemonStoreContext);

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    getPokeballSprite();
  }, [pokeballs]);

  useEffect(() => {
    if (!pokemonList.length) {
      return;
    }

    selectPokemon(pokemonList[0].url);
  }, [pokemonList]);

  const getPokemonList = async () => {
    const onSuccess = (pokemonList: PokemonListResult) => {
      setPokemonList(pokemonList.results);
    };
    const onError = (error: any) => {
      console.log(error);
    };

    await getPokemons({}, { onSuccess, onError });
  };

  const getPokeballSprite = () => {
    if (!pokeballs.length) {
      return;
    }

    const pokeball = pokeballs.find((pokeball) =>
      pokeball.name.includes(PokeballNameIdentifiers.pokeball)
    );

    if (!pokeball) {
      return;
    }

    setPokeballSprite(pokeball.sprite);
  };

  const selectPokemon = async (pokemonURL: string) => {
    const onSuccess = (pokemon: Pokemon) => {
      setSelectedPokemon(pokemon);
    };

    await getPokemon({ pokemonURL }, { onSuccess });
  };

  return (
    <div className={styles.container}>
      <h2>Team</h2>
      <div className={styles.splitScreen}>
        <div className={styles.screenSection}>
          {pokemonList.map((pokemon) => (
            <PokedexListPokemon
              pokemon={pokemon}
              pokeballSprite={pokeballSprite}
              selectPokemon={selectPokemon}
              key={pokemon.name}
            />
          ))}
        </div>
        <div className={styles.screenSection}>
          {selectedPokemon && <PokemonDetail pokemon={selectedPokemon} />}
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
