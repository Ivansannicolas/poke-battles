import axios from "axios";

import pokeApiClient from "@/domain/apiClients/pokeApiClient";
import { Pokemon, PokemonDTO, PokemonListResult } from "./pokemonRepository.types";

import { parsePokemonDTO } from "./pokemonDTOParser";

type GetPokemonParameters = { pokemonURL: string };
type GetPokemonCallbacks = {
  onSuccess: (pokemon: Pokemon) => void;
  onError?: (error: any) => void;
};

export async function getPokemon(
  { pokemonURL }: GetPokemonParameters,
  { onSuccess, onError }: GetPokemonCallbacks
) {
  try {
    const { data: pokemonDTO } = await axios.get<PokemonDTO>(pokemonURL);

    onSuccess(parsePokemonDTO(pokemonDTO));
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}

type GetPokemonsParameters = { limit?: number; offset?: number };
type GetPokemonsCallbacks = {
  onSuccess: (pokemonListResult: PokemonListResult) => void;
  onError: (error: any) => void;
};

export async function getPokemons(
  { limit = 10, offset = 0 }: GetPokemonsParameters,
  { onSuccess, onError }: GetPokemonsCallbacks
) {
  try {
    const endpoint = `pokemon/?limit=${limit}&offset=${offset}`;
    const { data: pokemonListResult } = await pokeApiClient.get<PokemonListResult>(endpoint);

    onSuccess(pokemonListResult);
  } catch (error) {
    onError(error);
  }
}
