import { FullURL } from "@/domain/apiClients/pokeApiClient.types";

export type PokeballListResultDTO = {
  id: number;
  items: PokeballResult[];
};

export type PokeballResult = {
  name: string;
  url: FullURL;
};

export type PokeballDTO = {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: {
    name: string;
    url: FullURL;
  };
  attributes: {
    name: string;
    url: FullURL;
  }[];
  category: {
    name: string;
    url: FullURL;
  };
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: FullURL;
    };
  }[];
  flavor_text_entries: {
    text: string;
    version_group: {
      name: string;
      url: FullURL;
    };
    language: {
      name: string;
      url: FullURL;
    };
  }[];
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: FullURL;
    };
  }[];
  names: {
    name: string;
    language: {
      name: string;
      url: FullURL;
    };
  }[];
  sprites: {
    default: FullURL;
  };
  held_by_pokemon: {
    pokemon: {
      name: string;
      url: FullURL;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: FullURL;
      };
    }[];
  }[];
  baby_trigger_for: {
    url: string | null;
  };
};

export type Pokeball = {
  id: number;
  name: string;
  sprite: string;
};
