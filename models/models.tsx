interface PokemonBase {
  name: string;
  url: string;
}

interface ResponsePokemonBase {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBase[];
}
