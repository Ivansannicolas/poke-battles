import { Pokeball, PokeballDTO } from "./pokeballsRespository.types";

export function parsePokeballDTO(pokeballDTO: PokeballDTO): Pokeball {
  const pokeball = {
    id: pokeballDTO.id,
    name: pokeballDTO.name,
    sprite: pokeballDTO.sprites.default,
  };

  return pokeball;
}
