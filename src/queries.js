import { useQuery, gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetAllPokemons(
    $limit: Int
    $orderBy: [pokemon_v2_pokemon_order_by!]
    $offset: Int
  ) {
    pokemon_v2_pokemon(limit: $limit, order_by: $orderBy, offset: $offset) {
      id
      name
      pokemon_species_id
      pokemon_v2_pokemonspecy {
        generation_id
        is_baby
        is_legendary
        is_mythical
        name
        pokemon_shape_id
        pokemon_v2_pokemonshape {
          name
        }
        pokemon_v2_generation {
          name
        }
        pokemon_color_id
        pokemon_v2_pokemoncolor {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const GET_GENERATIONS = gql`
  query GetPokemonGenerations {
    pokemon_v2_generation {
      id
      name
    }
  }
`;

export const GET_TYPES = gql`
  query GetPokemonTypes {
    pokemon_v2_type {
      id
      name
    }
  }
`;

export const GET_SHAPES = gql`
  query GetPokemonShapes {
    pokemon_v2_pokemonshape {
      id
      name
    }
  }
`;

export const GET_HABITATS = gql`
  query GetPokemonHabitats {
    pokemon_v2_pokemonhabitat {
      id
      name
    }
  }
`;
