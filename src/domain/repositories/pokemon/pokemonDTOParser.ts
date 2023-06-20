import {
  Pokemon,
  PokemonDTO,
  PokemonAbilityDTO,
  PokemonFormDTO,
  PokemonAbility,
  PokemonForm,
  PokemonMoveDTO,
  PokemonMove,
  PokemonSpeciesDTO,
  PokemonSpecies,
  PokemonSpritesDTO,
  PokemonSprites,
  PokemonStatDTO,
  PokemonStat,
  PokemonTypeDTO,
  PokemonType,
} from "./pokemonRepository.types";

const parsePokemonAbilitiesDTO = (pokemonAbilityDTO: PokemonAbilityDTO): PokemonAbility => {
  return {
    name: pokemonAbilityDTO.ability.name,
    url: pokemonAbilityDTO.ability.url,
  };
};

const parsePokemonFormsDTO = (pokemonFormDTO: PokemonFormDTO): PokemonForm => {
  return {
    name: pokemonFormDTO.name,
    url: pokemonFormDTO.url,
  };
};

const parsePokemonMovesDTO = (pokemonMoveDTO: PokemonMoveDTO): PokemonMove => {
  return {
    name: pokemonMoveDTO.move.name,
    url: pokemonMoveDTO.move.url,
  };
};

const parsePokemonSpeciesDTO = (pokemonSpeciesDTO: PokemonSpeciesDTO): PokemonSpecies => {
  return {
    name: pokemonSpeciesDTO.name,
    url: pokemonSpeciesDTO.url,
  };
};

const parsePokemonSpritesDTO = (pokemonSpritesDTO: PokemonSpritesDTO): PokemonSprites => {
  return {
    back_default: pokemonSpritesDTO.back_default || "",
    back_female: pokemonSpritesDTO.back_female || "",
    back_shiny: pokemonSpritesDTO.back_shiny || "",
    back_shiny_female: pokemonSpritesDTO.back_shiny_female || "",
    front_default: pokemonSpritesDTO.front_default || "",
    front_female: pokemonSpritesDTO.front_female || "",
    front_shiny: pokemonSpritesDTO.front_shiny || "",
    front_shiny_female: pokemonSpritesDTO.front_shiny_female || "",
  };
};

const parsePokemonStatsDTO = (pokemonStatDTO: PokemonStatDTO): PokemonStat => {
  return {
    name: pokemonStatDTO.stat.name,
    url: pokemonStatDTO.stat.url,
  };
};

const parsePokemonTypesDTO = (pokemonTypeDTO: PokemonTypeDTO): PokemonType => {
  return {
    name: pokemonTypeDTO.type.name,
    url: pokemonTypeDTO.type.url,
  };
};

export const parsePokemonDTO = (pokemonDTO: PokemonDTO): Pokemon => {
  const pokemon: Pokemon = {
    id: pokemonDTO.id,
    name: pokemonDTO.name,
    height: pokemonDTO.height,
    weight: pokemonDTO.weight,
    abilities: pokemonDTO.abilities.map(parsePokemonAbilitiesDTO),
    forms: pokemonDTO.forms.map(parsePokemonFormsDTO),
    moves: pokemonDTO.moves.map(parsePokemonMovesDTO),
    species: parsePokemonSpeciesDTO(pokemonDTO.species),
    sprites: parsePokemonSpritesDTO(pokemonDTO.sprites),
    stats: pokemonDTO.stats.map(parsePokemonStatsDTO),
    types: pokemonDTO.types.map(parsePokemonTypesDTO),
  };

  return pokemon;
};
