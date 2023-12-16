const fetchPokemonDetails = async (url: string): Promise<any> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch details for Pokemon from URL: ${url}`);
  }

  const pokemonDetails = await response.json();

  return pokemonDetails;
};

export const getAllPokemon = async (): Promise<any[]> => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon data");
  }

  const data: ResponsePokemonBase = await response.json();
  const pokemonList: any[] = await Promise.all(
    data.results.map((result: any) => fetchPokemonDetails(result.url))
  );

  return pokemonList;
};
