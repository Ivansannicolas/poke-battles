import axios from "axios";

import pokeApiClient from "@/domain/apiClients/pokeApiClient";
import { FullURL } from "@/domain/apiClients/pokeApiClient.types";

import {
  PokeballResult,
  PokeballListResultDTO,
  Pokeball,
  PokeballDTO,
} from "./pokeballsRespository.types";

import { parsePokeballDTO } from "./pokeballDTOParser";

import { ItemCategories } from "@/constants/ItemCategories";

type GetPokeballParameters = { pokeballURL: FullURL };
type GetPokeballCallbacks = {
  onSuccess: (pokeball: Pokeball) => void;
  onError?: (error: any) => void;
};

export async function getPokeball(
  { pokeballURL }: GetPokeballParameters,
  { onSuccess, onError }: GetPokeballCallbacks
) {
  try {
    const { data: pokeballDTO } = await axios.get<PokeballDTO>(pokeballURL);

    onSuccess(parsePokeballDTO(pokeballDTO));
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}

type GetPokeballsCallbacks = {
  onSuccess: (pokeballListResult: PokeballResult[]) => void;
  onError: (error: any) => void;
};

export async function getPokeballs({ onSuccess, onError }: GetPokeballsCallbacks) {
  try {
    const endpoint = `item-category/${ItemCategories.pokeballs}/`;
    const { data: pokeballListResult } = await pokeApiClient.get<PokeballListResultDTO>(endpoint);

    onSuccess(pokeballListResult.items);
  } catch (error) {
    onError(error);
  }
}
