import { ReactNode, createContext, useEffect, useState } from "react";

import { getPokeball, getPokeballs } from "@/domain/repositories/pokeballs/pokeballsRepository";
import {
  Pokeball,
  PokeballResult,
} from "@/domain/repositories/pokeballs/pokeballsRespository.types";

import { PokemonStore } from "./PokemonContext.types";

import { PokemonContextInitialState } from "./PokemonContext.initialState";

export const PokemonStoreContext = createContext<PokemonStore>(PokemonContextInitialState);

type PokemonContextProps = { children: ReactNode };

export function PokemonContext({ children }: PokemonContextProps) {
  const [pokeballs, setPokeballs] = useState<Pokeball[]>([]);

  const handleGetPokeballs = async () => {
    const listOfPokeballs: Pokeball[] = [];
    const onSuccess = async (pokeballList: PokeballResult[]) => {
      const onFetchPokeballSuccess = (pokeball: Pokeball) => {
        listOfPokeballs.push(pokeball);
      };

      for (const pokeball of pokeballList) {
        await getPokeball({ pokeballURL: pokeball.url }, { onSuccess: onFetchPokeballSuccess });
      }

      setPokeballs(listOfPokeballs);
    };

    const onError = () => {};

    await getPokeballs({ onSuccess, onError });
  };

  useEffect(() => {
    handleGetPokeballs();
  }, []);

  const store: PokemonStore = {
    pokeballs,
  };

  return <PokemonStoreContext.Provider value={store}>{children}</PokemonStoreContext.Provider>;
}
