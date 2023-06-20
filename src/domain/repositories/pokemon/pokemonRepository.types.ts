import { FullURL, PartialURL } from "@/domain/apiClients/pokeApiClient.types";

export type PokemonListResult = {
  count: number;
  next: FullURL | null;
  previous: FullURL | null;
  results: PokemonResult[];
};

export type PokemonResult = {
  name: string;
  url: FullURL;
};

export type PokemonDTO = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbilityDTO[];
  forms: PokemonFormDTO[];
  game_indices: PokemonGameIndiceDTO[];
  held_items: PokemonHeldItemDTO[];
  location_area_encounters: PartialURL;
  moves: PokemonMoveDTO[];
  species: PokemonSpeciesDTO;
  sprites: PokemonSpritesDTO;
  stats: PokemonStatDTO[];
  types: PokemonTypeDTO[];
};

export type PokemonAbilityDTO = {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: FullURL;
  };
};

export type PokemonFormDTO = {
  name: string;
  url: FullURL;
};

type PokemonGameIndiceDTO = {
  game_index: number;
  version: {
    name: string;
    url: FullURL;
  };
};

type PokemonHeldItemDTO = {
  item: {
    name: string;
    url: FullURL;
  };
  version_details: [
    {
      rarity: number;
      version: {
        name: string;
        url: FullURL;
      };
    }
  ];
};

export type PokemonMoveDTO = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      version_group: {
        name: string;
        url: FullURL;
      };
      move_learn_method: {
        name: string;
        url: FullURL;
      };
    }
  ];
};

export type PokemonSpeciesDTO = {
  name: string;
  url: FullURL;
};

export type PokemonSpritesDTO = {
  back_default: FullURL | null;
  back_female: FullURL | null;
  back_shiny: FullURL | null;
  back_shiny_female: FullURL | null;
  front_default: FullURL | null;
  front_female: FullURL | null;
  front_shiny: FullURL | null;
  front_shiny_female: FullURL | null;
};

export type PokemonStatDTO = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: FullURL;
  };
};

export type PokemonTypeDTO = {
  slot: number;
  type: {
    name: string;
    url: FullURL;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  moves: PokemonMove[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonAbility = {
  name: string;
  url: FullURL;
};

export type PokemonForm = {
  name: string;
  url: FullURL;
};

export type PokemonMove = {
  name: string;
  url: string;
};

export type PokemonSpecies = {
  name: string;
  url: FullURL;
};

export type PokemonSprites = {
  back_default: FullURL;
  back_female: FullURL;
  back_shiny: FullURL;
  back_shiny_female: FullURL;
  front_default: FullURL;
  front_female: FullURL;
  front_shiny: FullURL;
  front_shiny_female: FullURL;
};

export type PokemonStat = {
  name: string;
  url: FullURL;
};

export type PokemonType = {
  name: string;
  url: FullURL;
};
